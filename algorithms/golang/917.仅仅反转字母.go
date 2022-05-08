/*
 * @lc app=leetcode.cn id=917 lang=golang
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
func reverseOnlyLetters(s string) string {
	ans, size := []byte(s), len(s)
	for l, r := 0, size-1; l < r; {
		for l < size && !(s[l] >= 'a' && s[l] <= 'z' || s[l] >= 'A' && s[l] <= 'Z') {
			l++
		}
		for r > -1 && !(s[r] >= 'a' && s[r] <= 'z' || s[r] >= 'A' && s[r] <= 'Z') {
			r--
		}
		if l >= r {
			break
		}
		ans[l], ans[r] = ans[r], ans[l]
		l++
		r--
	}
	return string(ans)
}

// @lc code=end

