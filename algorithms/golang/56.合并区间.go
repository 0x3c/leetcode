/*
 * @lc app=leetcode.cn id=56 lang=golang
 *
 * [56] 合并区间
 */

// @lc code=start

func merge(intervals [][]int) [][]int {
	if len(intervals) <= 1 {
		return intervals
	}
	sort.Slice(intervals, func(i, j int) bool {
		if intervals[i][0] < intervals[j][0] {
			return true
		} else {
			return false
		}
	})
	merged := [][]int{intervals[0]}
	for i, j := 1, 0; i < len(intervals); i++ {
		if intervals[i][0] <= merged[j][1] {
			merged[j][1] = max(intervals[i][1], merged[j][1])
		} else {
			merged = append(merged, intervals[i])
			j++
		}
	}
	return merged
}
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// @lc code=end
