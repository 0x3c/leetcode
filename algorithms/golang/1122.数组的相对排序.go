/*
 * @lc app=leetcode.cn id=1122 lang=golang
// @lc code=start

/**
 * 计数排序
 * O(m + n + 1011)
*/
func relativeSortArray(arr1 []int, arr2 []int) []int {
	freq := [1001]int{}
	for i := 0; i < len(arr1); i++ {
		freq[arr1[i]]++
	}
	idx := 0
	for i := 0; i < len(arr2); i++ {
		for ; freq[arr2[i]] > 0; freq[arr2[i]]-- {
			arr1[idx] = arr2[i]
			idx++
		}
	}

	for j := 0; j < 1001; j++ {
		for ; freq[j] > 0; freq[j]-- {
			arr1[idx] = j
			idx++
		}
	}
	return arr1
}

// @lc code=end
