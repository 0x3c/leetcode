/*
 * @lc app=leetcode.cn id=36 lang=golang
 *
 * [36] 有效的数独
 */

// @lc code=start

/**
 * 分别记录每一行、每一列、每一区块出现的数字的个数。
 * 若出现次数大于1则为 invalid
 * 时间复杂度O(1)，空间复杂度O(1)
 */
func isValidSudoku(board [][]byte) bool {
	blocks := [3][3][9]int{}
	rows := [9][9]int{}
	cols := [9][9]int{}
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			ch := board[i][j]
			if ch != '.' {
				idx := ch - '0' - 1
				blocks[i/3][j/3][idx]++
				rows[i][idx]++
				cols[j][idx]++
				if blocks[i/3][j/3][idx] > 1 || rows[i][idx] > 1 || cols[j][idx] > 1 {
					return false
				}
			}
		}
	}
	return true
}

// @lc code=end