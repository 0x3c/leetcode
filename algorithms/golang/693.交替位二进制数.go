/*
 * @lc app=leetcode.cn id=693 lang=golang
 *
 * [693] 交替位二进制数
 */

// @lc code=start
func hasAlternatingBits(n int) bool {
	ans := true
	preBit := -1
	for n != 0 {
		bit := n % 2
		if preBit == bit {
			return false
		}
		preBit = bit
		n = n / 2
	}
	return ans
}

// @lc code=end