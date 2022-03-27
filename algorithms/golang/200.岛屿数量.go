/*
 * @lc app=leetcode.cn id=200 lang=golang
 *
 * [200] 岛屿数量
 */

// @lc code=start

var Directions [][]int = [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

/**
 * DFS
 */
func numIslands_1(grid [][]byte) int {
	ret := 0
	row, col := len(grid), len(grid[0])
	var dfs func(row, col int)
	dfs = func(x, y int) {
		if x >= row || y >= col || x < 0 || y < 0 || grid[x][y] == '0' {
			return
		}
		grid[x][y] = '0'
		for _, direction := range Directions {
			x1, y1 := x+direction[0], y+direction[1]
			dfs(x1, y1)
		}
	}

	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			if grid[i][j] == '1' {
				ret++
				dfs(i, j)
			}
		}
	}
	return ret
}

/**
 * BFS
 */
func numIslands(grid [][]byte) int {
	ret := 0
	row, col := len(grid), len(grid[0])
	var bfs func(row, col int)
	bfs = func(x, y int) {
		q := [][]int{{x, y}}
		for len(q) > 0 {
			size := len(q)
			for i := 0; i < size; i++ {
				posX, posY := q[i][0], q[i][1]
				if posX >= row || posY >= col || posX < 0 || posY < 0 || grid[posX][posY] == '0' {
					continue
				}
				grid[posX][posY] = '0'
				for _, direction := range Directions {
					x1, y1 := posX+direction[0], posY+direction[1]
					q = append(q, []int{x1, y1})
				}
			}
			q = q[size:]
		}
	}

	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			if grid[i][j] == '1' {
				ret++
				bfs(i, j)
			}
		}
	}
	return ret
}

// @lc code=end
