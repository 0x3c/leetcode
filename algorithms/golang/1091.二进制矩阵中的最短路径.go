/*
 * @lc app=leetcode.cn id=1091 lang=golang
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
func shortestPathBinaryMatrix(grid [][]int) int {
	n := len(grid)
	if grid[0][0] == 1 || grid[n-1][n-1] == 1 {
		return -1
	}
	if n < 3 {
		return n
	}
	ret := 0
	delta := [][2]int{
		{0, 1},
		{0, -1},
		{1, -1},
		{1, 1},
		{1, 0},
		{-1, 0},
		{-1, 1},
		{-1, -1},
	}
	q := [][2]int{{0, 0}}

	for len(q) > 0 {
		size := len(q)
		ret++
		for i := 0; i < size; i++ {
			r, c := q[i][0], q[i][1]
			if r == n-1 && c == n-1 {
				return ret
			}
			for j := 0; j < len(delta); j++ {
				dr, dc := delta[j][0], delta[j][1]
				x, y := r+dr, c+dc
				if x < 0 || y < 0 || x >= n || y >= n {
					continue
				}
				if grid[x][y] == 0 {
					q = append(q, [2]int{x, y})
					grid[x][y] = 1
				}
			}
		}
		q = append(q[size:])

	}
	return -1
}

// @lc code=end
