/*
 * @lc app=leetcode.cn id=69 lang=golang
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 二分查找。由于 x 可能开根号为小数，所以每次遇到 mid^2<x 时，记录当前 mid 值作为备选结果。
 * 时间复杂度O(log(x))， 空间复杂度O(1)。
 */
func mySqrt_1(x int) int {
	left, right := 0, x
	ret := 0
	for left <= right {
		mid := (left + right) / 2
		if mid*mid > x {
			right = mid - 1
		} else {
			ret = mid
			left = mid + 1
		}
	}
	return ret
}

/**
* 牛顿迭代法
* 时间复杂度O(log(x))， 空间复杂度O(1)。
 */
func mySqrt(x int) int {
	ret := x
	for ret*ret > x {
		ret = (ret + x/ret) / 2
	}
	return ret
}

// @lc code=end
