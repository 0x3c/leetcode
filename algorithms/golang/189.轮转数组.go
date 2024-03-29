/*
 * @lc app=leetcode.cn id=189 lang=golang
 *
 * [189] 轮转数组
 */

// 1. 开辟一个长度为 n 的新数组，新数组每一个索引对应的值均可推出。
//    时间复杂度O(n)，空间复杂度O(n)
func rotate_1(nums []int, k int) {
	size := len(nums)
	k = k % size
	arr := make([]int, size)
	for i := 0; i < size; i++ {
		arr[i] = nums[(i+size-k)%size]
	}
	for i := 0; i < size; i++ {
		nums[i] = arr[i]
	}
}

// @lc code=start
// 2. 翻转数组
//    时间复杂度 O(n)，空间复杂度O(1)。
func reverse(nums []int, start, end int) {
	for start < end {
		nums[start], nums[end] = nums[end], nums[start]
		start++
		end--
	}
}
func rotate(nums []int, k int) {
	size := len(nums)
	k = k % size
	reverse(nums, 0, size-1)
	reverse(nums, 0, k-1)
	reverse(nums, k, size-1)
}

// @lc code=end
