/*
 * @lc app=leetcode.cn id=10 lang=golang
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
func isMatch(s string, p string) bool {
	dp := [][]bool{}
	sLen, pLen := len(s), len(p)
	for i := 0; i <= sLen; i++ {
		dp = append(dp, make([]bool, pLen+1))
	}

	dp[0][0] = true
	for j := 1; j <= pLen; j++ {
		if p[j-1] == '*' {
			dp[0][j] = dp[0][j-2]
		}
	}

	for i := 1; i <= sLen; i++ {
		for j := 1; j <= pLen; j++ {
			if s[i-1] == p[j-1] || p[j-1] == '.' {
				dp[i][j] = dp[i-1][j-1]
			} else if p[j-1] == '*' {
				if p[j-2] != s[i-1] && p[j-2] != '.' {
					dp[i][j] = dp[i][j-2]
				} else {
					dp[i][j] = dp[i][j-2] || dp[i][j-1] || dp[i-1][j]
				}
			}
		}
	}
	return dp[sLen][pLen]
}

// @lc code=end
