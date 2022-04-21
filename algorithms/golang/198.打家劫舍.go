/*
 * @lc app=leetcode.cn id=198 lang=golang
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * 设 opt[i]为达到第 i 个房屋时的最大偷取额
 * opt[i]=max(opt[i-1],opt[i-2]+nums[i])
 * ret=opt[last]
 * opt 可优化为变量
 */
func rob(nums []int) int {
	size := len(nums)
	if size == 1 {
		return nums[0]
	}
	opt := make([]int, size)
	max := func(x, y int) int {
		if y > x {
			return y
		} else {
			return x
		}
	}
	opt[0], opt[1] = nums[0], max(nums[0], nums[1])
	for i := 2; i < size; i++ {
		opt[i] = max(opt[i-1], opt[i-2]+nums[i])
	}
	return opt[size-1]
}

// @lc code=end