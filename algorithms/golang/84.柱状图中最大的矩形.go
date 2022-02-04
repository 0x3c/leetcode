/*
 * @lc app=leetcode.cn id=84 lang=golang
 *
 * [84] 柱状图中最大的矩形
 */

/**
 * 1. 两层循环暴力求解。
 * 确定范围找最小高度，找最小高度为O(1)。
 * 时间复杂度 O(n^2)。
 */
func largestRectangleArea_1(heights []int) int {
	size := len(heights)
	if size == 0 {
		return 0
	}
	ans := 0
	for i := 0; i < size; i++ {
		minHeight := heights[i]
		for j := i; j < size; j++ {
			if heights[j] < minHeight {
				minHeight = heights[j]
			}
			if (j-i+1)*minHeight > ans {
				ans = minHeight * (j - i + 1)
			}
		}
	}
	return ans
}

/**
 * 2. 两层循环暴力求解。
 * 第一层循环确定高度，第二层循环找左右边界。
 * 时间复杂度 O(n^2)。
 */
func largestRectangleArea_2(heights []int) int {
	size := len(heights)
	if size == 0 {
		return 0
	}
	ans := 0
	for mid := 0; mid < size; mid++ {
		left, right := mid, mid
		for left > -1 && heights[left] >= heights[mid] {
			left--
		}
		for right < size && heights[right] >= heights[mid] {
			right++
		}
		area := (right - left - 1) * heights[mid]
		if ans < area {
			ans = area
		}
	}
	return ans
}

// @lc code=start
func calcArea(heights []int, i, left, right int) int {
	return heights[i] * (right - left - 1)
}
func largestRectangleArea(heights []int) int {
	size := len(heights)
	if size == 0 {
		return 0
	}
	ans := 0
	stack := []int{-1}
	for i := 0; i < size; i++ {
		for len(stack) > 1 && heights[i] < heights[stack[len(stack)-1]] {
			index := stack[len(stack)-1]
			stack = stack[0 : len(stack)-1]
			area := calcArea(heights, index, stack[len(stack)-1], i)
			if ans < area {
				ans = area
			}
		}
		stack = append(stack, i)
	}
	for len(stack) > 1 {
		index := stack[len(stack)-1]
		stack = stack[0 : len(stack)-1]
		area := calcArea(heights, index, stack[len(stack)-1], size)
		if ans < area {
			ans = area
		}
	}
	return ans
}

// @lc
