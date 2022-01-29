/*
 * @lc app=leetcode.cn id=283 lang=golang
 *
 * [283] 移动零
 */

// @lc code=start
func moveZeroes(nums []int) {
	for p, i := 0, 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[i], nums[p] = nums[p], nums[i]
			p++
		}
	}
}

// @lc code=end
