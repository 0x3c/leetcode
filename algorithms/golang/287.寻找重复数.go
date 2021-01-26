import (
	"sort"
)

/*
 * @lc app=leetcode.cn id=287 lang=golang
 *
 * [287] 寻找重复数
 */

// 使用 hash
func findDuplicate_hash(nums []int) int {
	visited := map[int]int{}
	for _, n := range nums {
		_, ok := visited[n]
		if ok {
			return n
		}
		visited[n] = 1
	}
	return -1
}

// @lc code=start
// 排序, 比较相邻元素
func findDuplicate(nums []int) int {
	sort.Ints(nums)
	for i, n := range nums {
		if i > 0 && nums[i-1] == n {
			return n
		}
	}
	return -1
}

// @lc code=end
