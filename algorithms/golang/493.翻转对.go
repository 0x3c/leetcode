/*
 * @lc app=leetcode.cn id=493 lang=golang
 *
 * [493] 翻转对
 */

// @lc code=start

func mergeSort(nums []int, start, end int) int {
	if start >= end {
		return 0
	}
	mid := start + (end-start)>>1
	cnt := mergeSort(nums, start, mid) + mergeSort(nums, mid+1, end)
	for i, j := start, mid+1; i <= mid; i++ {
		for j <= end && (nums[i]>>1 > nums[j] || nums[i]>>1 == nums[j] && nums[i]&1 == 1) {
			j++
		}
		cnt += j - (mid + 1)
	}
	merge(nums, start, mid, end)
	return cnt
}
func merge(nums []int, start, mid, end int) {
	l, r := start, mid+1
	tmp := []int{}
	for l <= mid && r <= end {
		if nums[l] < nums[r] {
			tmp = append(tmp, nums[l])
			l++
		} else {
			tmp = append(tmp, nums[r])
			r++
		}
	}
	for l <= mid {
		tmp = append(tmp, nums[l])
		l++
	}
	for r <= end {
		tmp = append(tmp, nums[r])
		r++
	}
	for i := start; i <= end; i++ {
		nums[i] = tmp[i-start]
	}
}

/**
 * 归并排序， 顺便统计
 */
func reversePairs(nums []int) int {
	return mergeSort(nums, 0, len(nums)-1)
}

// @lc code=end
