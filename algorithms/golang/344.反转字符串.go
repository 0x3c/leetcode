/*
 * @lc app=leetcode.cn id=344 lang=golang
 *
 * [344] 反转字符串
 */

// @lc code=start
func reverseString(s []byte) {
	size := len(s)
	for i := 0; i < size; i++ {
		if i >= size-1-i {
			return
		}
		s[i], s[size-1-i] = s[size-1-i], s[i]
	}
}

// @lc code=end

