/*
 * @lc app=leetcode.cn id=283 lang=golang
 *
 * [283] 移动零
 */

// @lc code=start
func moveZeroes(nums []int) {
	for i, j, size := 0, 0, 0; i+size < len(nums); j++ {
		if nums[j] != 0 {
			nums[i], nums[j] = nums[j], nums[i]
			i++
		} else {
			size++
		}
	}
}

// @lc code=end
