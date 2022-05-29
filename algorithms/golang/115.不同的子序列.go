/*
 * @lc app=leetcode.cn id=115 lang=golang
 *
 * [115] 不同的子序列
 */

// @lc code=start
func numDistinct(s string, t string) int {
	dp := [][]int{}
	sLen, tLen := len(s), len(t)

	for i := 0; i <= sLen; i++ {
		dp = append(dp, make([]int, tLen+1))
	}
	for i := 0; i <= sLen; i++ {
		dp[i][0] = 1
	}

	for i := 1; i <= sLen; i++ {
		for j := 1; j <= tLen; j++ {
			if s[i-1] == t[j-1] {
				dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
			} else {
				dp[i][j] = dp[i-1][j]
			}
		}
	}
	return dp[sLen][tLen]
}

// @lc code=end
