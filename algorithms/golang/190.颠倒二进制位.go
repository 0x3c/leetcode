/*
 * @lc app=leetcode.cn id=190 lang=golang
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
func reverseBits(num uint32) uint32 {
	ret, bits := uint32(0), 31
	for num > 0 {
		ret = ret | ((num & 1) << bits)
		num = num >> 1
		bits--
	}
	return ret
}

// @lc code=end

