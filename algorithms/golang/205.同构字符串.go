/*
 * @lc app=leetcode.cn id=205 lang=golang
 *
 * [205] 同构字符串
 */

// @lc code=start
func isIsomorphic(s string, t string) bool {
	sLen, tLen := len(s), len(t)
	if sLen != tLen {
		return false
	}
	cache, used := [256]byte{}, [256]bool{}
	for i := 0; i < sLen; i++ {
		ch1, ch2 := s[i], t[i]
		if cache[int(ch1)] == 0 && used[int(ch2)] || cache[int(ch1)] != 0 && cache[int(ch1)] != ch2 {
			return false
		}
		cache[int(ch1)] = ch2
		used[int(ch2)] = true
	}
	return true
}

// @lc code=end
