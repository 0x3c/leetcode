/*
 * @lc app=leetcode.cn id=51 lang=golang
 *
 * [51] N 皇后
 */

// @lc code=start

/**
 * 回溯
 */
func isValid(board []string, row, col int) bool {
	rules := [8][2]int{
		[2]int{0, 1},   // right
		[2]int{0, -1},  // left
		[2]int{1, 0},   // bottom
		[2]int{-1, 0},  // top
		[2]int{-1, 1},  // top right
		[2]int{1, -1},  // bottom left
		[2]int{-1, -1}, // top left
		[2]int{1, 1},   // bottom right

	}
	size := len(board)
	// check rows
	for _, rule := range rules {
		r, c := rule[0], rule[1]
		px, py := row+r, col+c
		for px < size && py < size && px > -1 && py > -1 {
			if board[px][py] == 'Q' {
				return false
			}
			px += r
			py += c
		}

	}
	return true
}
func solveNQueens(n int) [][]string {
	ans := [][]string{}
	board := make([]string, n)
	for i := 0; i < n; i++ {
		bytes := make([]byte, n)
		for j := 0; j < len(bytes); j++ {
			bytes[j] = '.'
		}
		board[i] = string(bytes)
	}
	var recursion func(row, col int)
	recursion = func(row, col int) {
		if row == n {
			comb := make([]string, n)
			copy(comb, board)
			ans = append(ans, comb)
			return
		}

		for col < n {
			if isValid(board, row, col) {
				old := board[row]
				temp := []byte(old)
				temp[col] = 'Q'
				board[row] = string(temp)
				recursion(row+1, 0)
				board[row] = old
			}
			col++
		}
	}
	recursion(0, 0)
	return ans
}

// @lc code=end
