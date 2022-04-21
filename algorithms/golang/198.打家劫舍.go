/*
 * @lc app=leetcode.cn id=198 lang=golang
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * 结果为最后一个房屋被偷的最大值和最后一个房屋不被偷的最大值中较大者
 * 设dp1[i]为达到第 i 个房屋不偷时所能偷取的最大值，dp2[i]为到达第 i 个房屋被偷时所能偷取的最大值
 * dp1[i]=max(dp1[i-1],dp2[i-1]); dp2[i]=dp1[i-1]+nums[i]
 * ret=max(dp1[last],dp2[last])
 * dp1,dp2 可优化为变量
 */
func rob(nums []int) int {
	size := len(nums)
	if size == 1 {
		return nums[0]
	}
	dp1, dp2 := make([]int, size), make([]int, size)
	dp1[0], dp1[1], dp2[0], dp2[1] = 0, nums[0], nums[0], nums[1]
	max := func(x, y int) int {
		if y > x {
			return y
		} else {
			return x
		}
	}
	for i := 2; i < size; i++ {
		dp1[i] = max(dp1[i-1], dp2[i-1])
		dp2[i] = dp1[i-1] + nums[i]
	}

	return max(dp1[size-1], dp2[size-1])
}

// @lc code=end