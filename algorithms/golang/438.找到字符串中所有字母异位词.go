/*
 * @lc app=leetcode.cn id=438 lang=golang
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
func findAnagrams(s string, p string) []int {
	ret := []int{}
	s_count, p_count, s_len, p_len := [26]int{}, [26]int{}, len(s), len(p)
	if s_len < p_len {
		return ret
	}
	for i, ch := range p {
		p_count[ch-'a']++
		s_count[s[i]-'a']++
	}

	if s_count == p_count {
		ret = append(ret, 0)
	}
	for i := 1; i < len(s)-p_len+1; i++ {
		s_count[s[i-1]-'a']--
		s_count[s[i+p_len-1]-'a']++
		if s_count == p_count {
			ret = append(ret, i)
		}
	}
	return ret
}

// @lc code=end
