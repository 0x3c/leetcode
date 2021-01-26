/*
 * @lc app=leetcode.cn id=1079 lang=golang
 *
 * [1079] 活字印刷
 */

// @lc code=start
func numTilePossibilities(tiles string) int {
	hash, runes := map[rune]int{}, []rune{}
	for _, ch := range tiles {
		_, ok := hash[ch]
		if !ok {
			runes = append(runes, ch)
		}
		hash[ch]++
	}
	ans := 0
	for _, ch := range runes {
		dfs(runes, &hash, ch, &ans)
	}
	return ans
}

func dfs(list []rune, cache *map[rune]int, ch rune, ans *int) {
	count := (*cache)[ch]
	if count == 0 {
		return
	}
	(*cache)[ch]--
	(*ans)++
	for _, ch := range list {
		count := (*cache)[ch]
		if count == 0 {
			continue
		}
		dfs(list, cache, ch, ans)
	}
	(*cache)[ch]++
}

// @lc code=end
