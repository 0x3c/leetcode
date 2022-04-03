/*
 * @lc app=leetcode.cn id=33 lang=golang
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * 暴力循环
 */
func search_1(nums []int, target int) int {
	for i := 0; i < len(nums); i++ {
		if nums[i] == target {
			return i
		}
	}
	return -1
}

/**
 * 二分查找
 * 时间复杂度为二分查找算法复杂度： O(log(n))
 */
func search(nums []int, target int) int {
	left, right := 0, len(nums)-1
	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] == target {
			return mid
		}
		if nums[0] <= nums[mid] {
			// nums[0:mid] 有序
			if nums[mid] > target && target >= nums[0] {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			// nums[mid:] 有序
			if target > nums[mid] && target <= nums[len(nums)-1] {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return -1
}

// @lc code=end
