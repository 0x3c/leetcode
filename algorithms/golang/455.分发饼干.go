/*
 * @lc app=leetcode.cn id=455 lang=golang
 *
 * [455] 分发饼干
 */

// @lc code=start
func findContentChildren(g []int, s []int) int {
	ans := 0
	sort.Ints(g)
	sort.Ints(s)
	for i, j := len(s)-1, len(g)-1; i > -1; i-- {
		for j > -1 && s[i] < g[j] {
			j--
		}
		if j > -1 {
			j--
			ans++
		}
	}
	return ans
}

// @lc code=end
