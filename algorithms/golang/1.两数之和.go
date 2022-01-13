/*
 * @lc app=leetcode.cn id=1 lang=golang
 *
 * [1] 两数之和
 */

// @lc code=start
func twoSum(nums []int, target int) []int {
	ans := make([]int, 0)
	cache := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		index, ok := cache[nums[i]]
		if ok {
			return []int{index, i}
		}
		cache[target-nums[i]] = i
	}
	return ans
}

// @lc code=end

