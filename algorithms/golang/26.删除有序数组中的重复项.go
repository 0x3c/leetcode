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
	cur := 0
	for index := 1; index < size; index++ {
		if nums[index] == nums[cur] {
			continue
		}
		cur++
		nums[cur], nums[index] = nums[index], nums[cur]

	}
	return cur + 1
}

// @lc code=end

