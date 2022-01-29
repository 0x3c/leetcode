/*
 * @lc app=leetcode.cn id=11 lang=golang
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
func min(x, y int) int {
	if x < y {
		return x
	} else {
		return y
	}
}

func maxArea(height []int) int {
	ans := 0
	for left, right := 0, len(height)-1; left < right; {
		area := min(height[left], height[right]) * (right - left)
		if area > ans {
			ans = area
		}
		if height[left] > height[right] {
			right--
		} else {
			left++
		}
	}
	return ans
}

// @lc code=end
