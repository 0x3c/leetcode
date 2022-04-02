/*
 * @lc app=leetcode.cn id=367 lang=golang
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * 二分查找
 * 时间复杂度O(log(n))，空间复杂度O(1)
 */
func isPerfectSquare(num int) bool {
	left, right := 0, num
	for left <= right {
		mid := left + (right-left)/2
		cur := mid * mid
		if cur == num {
			return true
		} else if cur < num {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return false
}

// @lc code=end
