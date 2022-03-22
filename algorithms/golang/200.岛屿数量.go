package main

import "fmt"

/*
 * @lc app=leetcode.cn id=200 lang=golang
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * DFS
 */
func numIslands(grid [][]byte) int {
	ret := 0
	row, col := len(grid), len(grid[0])
	var dfs func(row, col int)
	dfs = func(x, y int) {
		if x >= row || y >= col || x < 0 || y < 0 || grid[x][y] == '0' {
			return
		}
		grid[x][y] = '0'
		dfs(x, y+1)
		dfs(x, y-1)
		dfs(x+1, y)
		dfs(x-1, y)
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

// @lc code=end

func main() {
	grid := [][]byte{
		[]byte{'1', '1', '1', '1', '0'},
		[]byte{'1', '1', '0', '1', '0'},
		[]byte{'1', '1', '0', '0', '0'},
		[]byte{'0', '0', '0', '0', '0'},
	}
	ans := numIslands(grid)
	fmt.Println(ans)
}
