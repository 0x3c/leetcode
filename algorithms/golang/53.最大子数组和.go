/*
 * @lc app=leetcode.cn id=53 lang=golang
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * opt[i] = 以 nums[i] 为数组末尾的具有最大和的连续子数组的和
 * 对于 opt[i]：若opt[i-1] + nums[i] > nums[i]，则opt[i]=opt[i-1]+nums[i]
 * 				否则 opt[i] = nums[i]
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */
func maxSubArray(nums []int) int {
	ret := nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i-1]+nums[i] > nums[i] {
			nums[i] += nums[i-1]
		}
		if nums[i] > ret {
			ret = nums[i]
		}
	}
	return ret
}

// @lc code=end

