/*
 * @lc app=leetcode.cn id=50 lang=golang
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * 1. 分治
 * 时间复杂度 O(log(n))
 * 空间复杂度 O(log(n))
 */
func myPow(x float64, n int) float64 {
	if n < 0 {
		x = 1 / x
		n = -n
	}
	if n == 0 {
		return 1
	}
	if n == 1 {
		return x
	}
	half := myPow(x, n/2)

	if n%2 == 1 {
		return half * half * x
	} else {
		return half * half
	}
}

// @lc code=end
