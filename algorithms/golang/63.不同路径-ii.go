/*
 * @lc app=leetcode.cn id=63 lang=golang
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * DP, 自底向上
 * DP方程: opt[i][j]=opt[i+1][j]+opt[i][j+1]
 */
func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	row, col := len(obstacleGrid), len(obstacleGrid[0])
	if obstacleGrid[row-1][col-1] == 1 {
		return 0
	}
	opt := make([][]int, row)
	for i := 0; i < row; i++ {
		opt[i] = make([]int, col)
	}
	opt[row-1][col-1] = 1
	for i := row - 1; i > -1; i-- {
		for j := col - 1; j > -1; j-- {
			if obstacleGrid[i][j] == 1 {
				opt[i][j] = 0
				continue
			}
			if j+1 < col && obstacleGrid[i][j+1] == 0 {
				opt[i][j] += opt[i][j+1]
			}
			if i+1 < row && obstacleGrid[i+1][j] == 0 {
				opt[i][j] += opt[i+1][j]
			}

		}
	}
	return opt[0][0]
}

// @lc code=end