/*
 * @lc app=leetcode.cn id=72 lang=golang
 *
 * [72] 编辑距离
 */

// @lc code=start
func min(x, y, z int) int {
	if x < y && x < z {
		return x
	} else if y < z {
		return y
	} else {
		return z
	}
}

/**
 * dp[i][j] 表示 word1 前i个字符与word2前j个字符的最小编辑距离
 * 若 word1[i] == word2[j], 则 dp[i][j] = dp[i-1][j-1]
 * 否则 dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
 * 初始状态: 若 i 为 0 则 dp[0][j] = j; 若 j 为 0 则 dp[i][0] = i
 */
func minDistance(word1 string, word2 string) int {
	l1, l2 := len(word1), len(word2)
	dp := make([][]int, l1+1)
	for i := 0; i <= l1; i++ {
		dp[i] = make([]int, l2+1)
		dp[i][0] = i
	}
	for i := 0; i <= l2; i++ {
		dp[0][i] = i
	}
	for i := 1; i <= l1; i++ {
		for j := 1; j <= l2; j++ {
			if word1[i-1] != word2[j-1] {
				dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
			} else {
				dp[i][j] = dp[i-1][j-1]
			}
		}
	}
	return dp[l1][l2]
}

// @lc code=end
