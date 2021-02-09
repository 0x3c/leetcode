/*
 * @lc app=leetcode.cn id=978 lang=golang
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
func max(x, y int) int {
	if x > y {
		return x
	} else {
		return y
	}
}

func maxTurbulenceSize(arr []int) int {
	size, ans := len(arr), 1
	increased, decreased := make([]int, size), make([]int, size)
	increased[0] = 1
	decreased[0] = 1
	for i := 1; i < size; i++ {
		if arr[i] > arr[i-1] {
			increased[i] = decreased[i-1] + 1
			decreased[i] = 1
		} else if arr[i] < arr[i-1] {
			decreased[i] = increased[i-1] + 1
			increased[i] = 1
		} else {
			decreased[i] = 1
			increased[i] = 1
		}
		ans = max(ans, max(increased[i], decreased[i]))
	}
	return ans
}

// @lc code=end
