/*
 * @lc app=leetcode.cn id=88 lang=golang
 *
 * [88] 合并两个有序数组
 */

// 1. 先合并后排序, 时间复杂度 O((m+n)log(m+n)), 空间复杂度 O(log(m+n))
func merge_0(nums1 []int, m int, nums2 []int, n int) {
	for i := 0; i < n; i++ {
		nums1[m+i] = nums2[i]
	}
	sort.Ints(nums1)
}

// 2. 将两数组较小的数放到新数组，循环至所有元素均放入新数组，再将新数组的值顺序复制给nums1
//    时间复杂度 O(m+n), 空间复杂度 O(m+n)
func merge_1(nums1 []int, m int, nums2 []int, n int) {
	arr := make([]int, m+n)

	for i, j := 0, 0; i < m || j < n; {
		if i == m || j != n && nums1[i] > nums2[j] {
			arr[i+j] = nums2[j]
			j++
		} else {
			arr[i+j] = nums1[i]
			i++
		}

	}
	for i := 0; i < m+n; i++ {
		nums1[i] = arr[i]
	}
}

// @lc code=start
// 3. 从大到小合并，不会出现覆盖现有元素的情况
//    时间复杂度 O(m+n), 空间复杂度 O(1)
func merge(nums1 []int, m int, nums2 []int, n int) {
	for i, j := m-1, n-1; i > -1 || j > -1; {
		if i == -1 || j != -1 && nums1[i] < nums2[j] {
			nums1[i+j+1] = nums2[j]
			j--
		} else {
			nums1[i+j+1] = nums1[i]
			i--
		}
	}
}

// @lc code=end

