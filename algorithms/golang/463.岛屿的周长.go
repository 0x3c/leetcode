/*
 * @lc app=leetcode.cn id=463 lang=golang
 *
 * [463] 岛屿的周长
 */

// @lc code=start
func islandPerimeter(grid [][]int) int {
	row, col := len(grid), len(grid[0])
	ans := 0
	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			if grid[i][j] == 0 {
				continue
			}
			ret := 0
			if j == 0 || grid[i][j-1] == 0 {
				ret++
			}
			if j == col-1 || grid[i][j+1] == 0 {
				ret++
			}
			if i == 0 || grid[i-1][j] == 0 {
				ret++
			}
			if i == row-1 || grid[i+1][j] == 0 {
				ret++
			}
			ans += ret
		}
	}
	return ans
}

// @lc code=end
