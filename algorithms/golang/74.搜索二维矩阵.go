/*
 * @lc app=leetcode.cn id=74 lang=golang
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start

/**
 * 二次二分查找
 */
func searchMatrix_1(matrix [][]int, target int) bool {
	lr, rr, row := 0, len(matrix)-1, -1
	lc, rc := 0, len(matrix[0])-1
	for lr <= rr {
		mr := lr + (rr-lr)/2
		if target < matrix[mr][0] {
			rr = mr - 1
		} else if target > matrix[mr][rc] {
			lr = mr + 1
		} else {
			row = mr
			break
		}
	}
	if row == -1 {
		return false
	}
	for lc <= rc {
		mc := lc + (rc-lc)/2
		if matrix[row][mc] == target {
			return true
		}
		if matrix[row][mc] > target {
			rc = mc - 1
		} else {
			lc = mc + 1
		}
	}
	return false
}

/**
 * 降维 + 一次二分
 */
func searchMatrix(matrix [][]int, target int) bool {
	row, col := len(matrix), len(matrix[0])
	left, right := 0, row*col-1
	for left <= right {
		mid := left + (right-left)/2
		r, c := mid/col, mid%col
		if matrix[r][c] == target {
			return true
		}
		if matrix[r][c] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return false
}

// @lc code=end