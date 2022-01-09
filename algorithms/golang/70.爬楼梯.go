/*
 * @lc app=leetcode.cn id=70 lang=golang
 *
 * [70] 爬楼梯
 */

// @lc code=start
func climbStairs(n int) int {
	if n < 3 {
		return n
	}
	n1, n2 := 1, 2
	for i := 3; i <= n; i++ {
		n1, n2 = n2, n1+n2
	}
	return n2
}

// @lc code=end
