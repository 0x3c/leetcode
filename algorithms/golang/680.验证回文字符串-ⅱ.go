/*
 * @lc app=leetcode.cn id=680 lang=golang
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
func helper(s string, start, end int) bool {
	for start < end && s[start] == s[end] {
		start++
		end--
	}
	return start >= end
}
func validPalindrome(s string) bool {
	l, r := 0, len(s)-1
	for l < r && s[l] == s[r] {
		l++
		r--
	}
	return helper(s, l+1, r) || helper(s, l, r-1)
}

// @lc code=end