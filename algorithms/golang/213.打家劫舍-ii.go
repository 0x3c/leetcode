/*
 * @lc app=leetcode.cn id=213 lang=golang
 *
 * [213] 打家劫舍 II
 */

// @lc code=start

/**
 * 分两种情况, 偷 1 和不偷 1分别计算
 * opt1[i] 为不偷第一个房屋时到达第i个房屋的最大偷取额，opt2[i] 为偷第一个房屋时到达第i个房屋的最大偷取额
 * opt1[i]=max(opt1[i-1], opt1[i-2]+nums[i])
 * opt2[i]=max(opt2[i-1], opt2[i-2]+nums[i])
 * ret= max(opt1[last], opt2[last-1])
 * opt1, opt2 可优化为变量
 */
func rob(nums []int) int {
	size := len(nums)
	if size == 1 {
		return nums[0]
	}
	// opt1 - 不偷第一家; opt2 - 偷第一家
	opt1, opt2 := make([]int, size), make([]int, size)
	opt1[1], opt2[0], opt2[1] = nums[1], nums[0], nums[0]
	max := func(x, y int) int {
		if x > y {
			return x
		} else {
			return y
		}
	}

	for i := 2; i < size; i++ {
		opt1[i] = max(opt1[i-1], opt1[i-2]+nums[i])
		opt2[i] = max(opt2[i-1], opt2[i-2]+nums[i])
	}
	return max(opt1[size-1], opt2[size-2])
}

// @lc code=end
