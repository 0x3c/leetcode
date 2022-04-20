/*
 * @lc app=leetcode.cn id=152 lang=golang
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * 需要记忆最小乘积和最大乘积
 */
func maxProduct(nums []int) int {
	size := len(nums)
	ret, minRet, maxRet := nums[0], nums[0], nums[0]
	max := func(a, b int) int {
		if a > b {
			return a
		} else {
			return b
		}
	}
	min := func(a, b int) int {
		if a > b {
			return b
		} else {
			return a
		}
	}
	for i := 1; i < size; i++ {
		if nums[i] < 0 {
			minRet, maxRet = maxRet, minRet
		}
		maxRet = max(maxRet*nums[i], nums[i])
		minRet = min(minRet*nums[i], nums[i])
		ret = max(maxRet, ret)
	}
	return ret
}

// @lc code=end
