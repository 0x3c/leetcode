/*
 * @lc app=leetcode.cn id=724 lang=golang
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
func pivotIndex(nums []int) int {
	size := len(nums)
	if size == 0 {
		return -1
	}
	leftSum, rightSum := make([]int, size), make([]int, size)
	leftSum[0] = nums[0]
	rightSum[size-1] = nums[size-1]
	for left, right := 1, size-2; left < size; {
		leftSum[left] = nums[left] + leftSum[left-1]
		rightSum[right] = nums[right] + rightSum[right+1]
		left++
		right--
	}
	for i := 0; i < size; i++ {
		if leftSum[i] == rightSum[i] {
			return i
		}
	}
	return -1
}

// @lc code=end