/*
 * @lc app=leetcode.cn id=709 lang=golang
 *
 * [709] 转换成小写字母
 */

// @lc code=start
func toLowerCase(s string) string {
	ret := []byte(s)
	for i, ch := range ret {
		if ch <= 'Z' && ch >= 'A' {
			ret[i] = ch + 'a' - 'A'
		}
	}
	return string(ret)
}

// @lc code=end

