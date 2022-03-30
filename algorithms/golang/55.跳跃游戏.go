/*
 * @lc app=leetcode.cn id=55 lang=golang
 *
 * [55] 跳跃游戏
 */

// @lc code=start

/**
 * 判断每个位置所能到达的最大距离
 */
func canJump_1(nums []int) bool {
	size := len(nums)
	max := 0
	for i := 0; i < size; i++ {
		if max >= i {
			if max < nums[i]+i {
				max = nums[i] + i
			}
		}
	}
	return max >= size-1
}

/**
 * 从后往前贪心，若当前 index 元素能到达 reachableIndex, 则 reachableIndex = inedx
 * 若最后 reachableIndex == 0 则返回 true
 */
func canJump(nums []int) bool {
	reachableIndex := len(nums) - 1
	for i := len(nums) - 1; i > -1; i-- {
		if nums[i]+i >= reachableIndex {
			reachableIndex = i
		}
	}
	return reachableIndex == 0
}

// @lc code=end
