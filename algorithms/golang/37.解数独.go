/*
 * @lc app=leetcode.cn id=37 lang=golang
 *
 * [37] 解数独
 */

// @lc code=start

/*
 * DFS, 共91个位置，从头开始对每个位置尝试1~9，并下探到新的位置，若棋盘不合法则回退并恢复状态
 */

var rows [9][9]bool
var cols [9][9]bool
var blocks [3][3][9]bool

func helper(boardPtr *[][]byte, pos int) bool {
	if pos == 81 {
		return true
	}
	board := *boardPtr
	row, col := pos/9, pos%9
	if board[row][col] == '.' {
		for n := 0; n < 9; n++ {
			if !blocks[row/3][col/3][n] && !rows[row][n] && !cols[col][n] {
				val := '1' + byte(n)
				board[row][col] = val
				blocks[row/3][col/3][n] = true
				rows[row][n] = true
				cols[col][n] = true
				if helper(boardPtr, pos+1) {
					return true
				}
				board[row][col] = '.'
				blocks[row/3][col/3][n] = false
				rows[row][n] = false
				cols[col][n] = false
			}
		}
		return false
	}
	return helper(boardPtr, pos+1)

}
func solveSudoku(board [][]byte) {
	rows = [9][9]bool{}
	cols = [9][9]bool{}
	blocks = [3][3][9]bool{}
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			if board[i][j] != '.' {
				n := board[i][j] - '0' - 1
				rows[i][n] = true
				cols[j][n] = true
				blocks[i/3][j/3][n] = true
			}
		}
	}
	helper(&board, 0)
}

// @lc code=end
