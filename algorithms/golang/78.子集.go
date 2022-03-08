/*
 * @lc app=leetcode.cn id=78 lang=golang
 *
 * [78] 子集
 */

// @lc code=start
func subsets(nums []int) [][]int {
	ans := [][]int{}
	var helper func(level int, cur []int)
	helper = func(level int, cur []int) {
		if level == len(nums) {
			ans = append(ans, append([]int{}, cur...))
			return
		}
		helper(level+1, cur)
		cur = append(cur, nums[level])
		helper(level+1, cur)
	}
	helper(0, []int{})
	return ans
}

// @lc code=end
