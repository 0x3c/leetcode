
/*
 * @lc app=leetcode.cn id=509 lang=golang
 *
 * [509] 斐波那契数
 */

// @lc code=start

/**
 * DP
 */
func fib(n int) int {
	dp := make([]int, n+1)
	var helper func(n int, memo []int) int
	helper = func(n int, memo []int) int {
		if n < 2 {
			return n
		}
		if memo[n] == 0 {
			memo[n] = helper(n-2, memo) + helper(n-1, memo)
		}
		return memo[n]
	}
	return helper(n, dp)
}

// @lc code=end