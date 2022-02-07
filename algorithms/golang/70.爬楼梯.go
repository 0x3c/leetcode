package main

/*
 * @lc app=leetcode.cn id=70 lang=golang
 *
 * [70] 爬楼梯
 */

// @lc code=start

/**
 * 递归 + 记忆
 * 时间复杂度：O(n)
 * 空间复杂度：O(n) - 递归栈
 */
func recursion(n int, cache map[int]int) int {
	if cache[n] > 0 {
		return cache[n]
	}
	ans := recursion(n-1, cache) + recursion(n-2, cache)
	cache[n] = ans
	return ans
}
func climbStairs_1(n int) int {
	if n < 3 {
		return n
	}
	cache := map[int]int{1: 1, 2: 2, 3: 3}
	return recursion(n-1, cache) + recursion(n-2, cache)
}

/**
 * 数学
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
func climbStairs(n int) int {
	if n < 3 {
		return n
	}
	n1, n2 := 1, 2
	for i := 3; i <= n; i++ {
		n1, n2 = n2, n1+n2
	}
	return n2
}

// @lc code=end
