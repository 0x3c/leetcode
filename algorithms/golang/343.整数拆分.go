/*
 * @lc app=leetcode.cn id=343 lang=golang
 *
 * [343] 整数拆分
 */

// @lc code=start
// dp[n]=max(dp[i]*(n-i),i*(n-i)),  i=[1,n-1]
func integerBreak(n int) int {
	dp := make([]int, 59)
	dp[0], dp[1], dp[2] = 0, 0, 1
	for i := 2; i < n+1; i++ {
		for j := 1; j < i; j++ {
			cur := max(j*(i-j), dp[j]*(i-j))
			dp[i] = max(cur, dp[i])
		}
	}
	return dp[n]
}
func max(x, y int) int {
	if x > y {
		return x
	} else {
		return y
	}
}

// @lc code=end
