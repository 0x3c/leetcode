/*
 * @lc app=leetcode.cn id=1984 lang=golang
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * 排序
 * 时间复杂度：O(n*log(n))
 * 空间福再度：O(log(n))
 */
func minimumDifference(nums []int, k int) int {
	ans := math.MaxInt32
	sort.Ints(nums)
	for i := 0; i <= len(nums)-k; i++ {
		val := nums[i+k-1] - nums[i]
		if val < ans {
			ans = val
		}
	}
	return ans
}

// @lc code=end