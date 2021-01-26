/*
 * @lc app=leetcode.cn id=1128 lang=golang
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
func numEquivDominoPairs(dominoes [][]int) int {
	freq, ans := make([]int, 100), 0
	for _, domino := range dominoes {
		x, y := domino[0], domino[1]
		if x > y {
			x, y = y, x
		}
		ans += freq[x*10+y]
		freq[x*10+y]++
	}
	return ans
}

// @lc code=end
