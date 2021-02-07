/*
 * @lc app=leetcode.cn id=665 lang=golang
 *
 * [665] 非递减数列
 */

/**
 * 若 nums[i] 小于 nums[i-1], 需要调整数字使数列为非递减数列:
 *	1. nums[i] >= nums[i-2], 调整 nums[i-1]=nums[i]
 *	2. nums[i] < nums[i-2], 调整 nums[i]=nums[i-1]
 */
// @lc code=start
func checkPossibility(nums []int) bool {
	count := 0
	if len(nums) < 2 {
		return true
	}
	if nums[0] > nums[1] {
		nums[0] = nums[1]
		count++
	}
	for i := 2; i < len(nums); i++ {
		if count > 1 {
			break
		}
		if nums[i] < nums[i-1] {
			if nums[i-2] <= nums[i] {
				nums[i-1] = nums[i]
			} else {
				nums[i] = nums[i-1]
			}
			count++

		}
	}
	return count < 2
}

// @lc code=end

