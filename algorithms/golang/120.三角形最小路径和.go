/*
 * @lc app=leetcode.cn id=120 lang=golang
 *
 * [120] 三角形最小路径和
 */

// @lc code=start

/**
 * dp, bottom-top
 * 时间复杂度：O(n^2)，空间复杂度：O(n)
 */
func minimumTotal(triangle [][]int) int {
	size := len(triangle)
	dp := make([]int, size+1)
	min := func(a, b int) int {
		if a < b {
			return a
		} else {
			return b
		}
	}
	for i := size - 1; i > -1; i-- {
		for j := 0; j < len(triangle[i]); j++ {
			dp[j] = min(dp[j], dp[j+1]) + triangle[i][j]
		}
	}
	return dp[0]
}

// @lc code=end

