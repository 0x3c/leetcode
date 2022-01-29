/*
 * @lc app=leetcode.cn id=26 lang=golang
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
func removeDuplicates(nums []int) int {
	size := len(nums)
	if size < 2 {
		return size
	}
	n := 1
	for i := 1; i < size; i++ {
		if nums[i] == nums[n-1] {
			continue
		} else {
			nums[n] = nums[i]
			n++
		}
	}
	return n
}

// @lc code=end

