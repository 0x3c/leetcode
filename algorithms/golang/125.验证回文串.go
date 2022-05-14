/*
 * @lc app=leetcode.cn id=125 lang=golang
 *
 * [125] 验证回文串
 */

// @lc code=start
func isUpperCase(ch byte) bool {
	if ch >= 'A' && ch <= 'Z' {
		return true
	}
	return false
}
func isLowerCase(ch byte) bool {
	if ch >= 'a' && ch <= 'z' {
		return true
	}
	return false
}
func isNumber(ch byte) bool {
	if ch >= '0' && ch <= '9' {
		return true
	}
	return false
}
func isValidLetter(ch byte) bool {
	if isLowerCase(ch) || isUpperCase(ch) || isNumber(ch) {
		return true
	}
	return false
}
func toLowerCase(ch byte) byte {
	if isUpperCase(ch) {
		return ch + 'a' - 'A'
	}
	return ch
}
func isPalindrome(s string) bool {
	for l, r := 0, len(s)-1; l < r; {
		ch_l, ch_r := s[l], s[r]
		for l < r && !isValidLetter(ch_l) {
			l++
			ch_l = s[l]
		}
		for r > l && !isValidLetter(ch_r) {
			r--
			ch_r = s[r]
		}
		if l < r && toLowerCase(ch_l) != toLowerCase(ch_r) {
			return false
		}
		l++
		r--
	}
	return true
}

// @lc code=end
