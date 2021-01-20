import (
	"sort"
)

/*
 * @lc app=leetcode.cn id=628 lang=golang
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
// O(nlogn)
func maximumProduct(nums []int) int {
	size := len(nums)
	sort.Ints(nums)
	ans := nums[size-1] * nums[size-2] * nums[size-3]

	if nums[0] > -1 || nums[size-1] < 1 {
		return ans
	} else {
		return maxInt(nums[0]*nums[1]*nums[size-1], ans)
	}
}

func maxInt(x, y int) int {
	if x > y {
		return x
	} else {
		return y
	}
}

// @lc code=end
