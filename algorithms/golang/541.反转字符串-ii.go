/*
 * @lc app=leetcode.cn id=541 lang=golang
 *
 * [541] 反转字符串 II
 */

// @lc code=start
func reverseStr(s string, k int) string {
	bytes, size := []byte(s), len(s)
	for i := 0; i*2*k < size; i++ {
		start := i * 2 * k
		end := start + k - 1
		if size-start < k {
			end = size - 1
		}
		for start < end {
			bytes[start], bytes[end] = bytes[end], bytes[start]
			start++
			end--
		}

	}
	return string(bytes)
}

// @lc code=end
