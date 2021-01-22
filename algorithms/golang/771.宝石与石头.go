/*
 * @lc app=leetcode.cn id=771 lang=golang
 *
 * [771] 宝石与石头
 */

// @lc code=start
func getIndex(ch rune) int {
	if ch > 90 {
		return int(ch - 'a' + 26)
	} else {
		return int(ch - 'A')
	}
}

func numJewelsInStones(jewels string, stones string) int {
	gems := make([]bool, 52)
	for _, ch := range jewels {
		index := getIndex(ch)
		gems[index] = true
	}
	ans := 0
	for _, ch := range stones {
		index := getIndex(ch)
		if gems[index] {
			ans++
		}
	}
	return ans
}

// @lc code=end
