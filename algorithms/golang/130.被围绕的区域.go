/*
 * @lc app=leetcode.cn id=130 lang=golang
 *
 * [130] 被围绕的区域
 */

// @lc code=start
func solve(board [][]byte) {
	row, col := len(board), len(board[0])
	dummy := row * col
	parent := make([]int, dummy+1)
	for i := 0; i <= dummy; i++ {
		parent[i] = i
	}
	find := func(x int) int {
		root := x
		for root != parent[root] {
			root = parent[root]
		}
		for x != parent[x] {
			x, parent[x] = parent[x], root
		}
		return root
	}
	union := func(x, y int) {
		xRoot, yRoot := find(x), find(y)
		if xRoot != yRoot {
			parent[xRoot] = yRoot
		}
	}

	d := [][]int{{1, 0}, {0, 1}, {0, -1}, {-1, 0}}
	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			if board[i][j] == 'O' {
				if i == 0 || i == row-1 || j == 0 || j == col-1 {
					union(i*col+j, dummy)
				} else {
					for k := 0; k < 4; k++ {
						x, y := i+d[k][0], j+d[k][1]
						if board[x][y] == 'O' {
							union(i*col+j, x*col+y)
						}
					}
				}
			}
		}
	}
	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			if find(i*col+j) != find(dummy) {
				board[i][j] = 'X'
			}
		}
	}

}

// @lc code=end