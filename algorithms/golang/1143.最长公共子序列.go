/*
 * @lc app=leetcode.cn id=1143 lang=golang
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * dp[i][j] 为 text1[0:i] 与 text2[0:j] 的最长公共子序列。
 * dp[i][j] = 若 text1[i]==text2[j], dp[i][j]=dp[i-1][j-1]+1
 * 			否则 dp[i][j]=Max(dp[i][j-1],dp[i-1][j])
 * 时间复杂度：O(M*N), M 为 text1 长度，N为 text2 长度
 */
func longestCommonSubsequence(text1 string, text2 string) int {
	len1, len2 := len(text1), len(text2)
	dp := [][]int{}
	for i := 0; i <= len1; i++ {
		dp = append(dp, make([]int, len2+1))
	}
	max := func(a, b int) int {
		if a > b {
			return a
		} else {
			return b
		}
	}
	for i := 1; i <= len1; i++ {
		for j := 1; j <= len2; j++ {
			if text1[i-1] == text2[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = max(dp[i][j-1], dp[i-1][j])
			}
		}
	}
	return dp[len1][len2]
}

// @lc code=end
