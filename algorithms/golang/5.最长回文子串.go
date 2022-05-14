/*
 * @lc app=leetcode.cn id=5 lang=golang
 *
 * [5] 最长回文子串
 */

// @lc code=start
func longestPalindrome(s string) string {
	size := len(s)
	if size < 2 {
		return s
	}
	start, length := 0, 1
	dp := make([][]bool, size)
	for i := 0; i < size; i++ {
		dp[i] = make([]bool, size)
		dp[i][i] = true
	}

	for len := 2; len <= size; len++ {
		for i := 0; i+len <= size; i++ {
			j := i + len - 1
			if s[i] != s[j] {
				dp[i][j] = false
			} else {
				if j-i <= 2 {
					dp[i][j] = true
				} else {
					dp[i][j] = dp[i+1][j-1]
				}
				if dp[i][j] && length < len {
					length = j - i + 1
					start = i
				}
			}
		}
	}

	return s[start : start+length]
}

// @lc code=end
