/*
 * @lc app=leetcode.cn id=8 lang=golang
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
func myAtoi(s string) int {
	val := 0
	sign, i := 1, 0
	for ; i < len(s) && s[i] == ' '; i++ {
	}

	if i >= len(s) || s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z' {
		return val
	}
	if s[i] == '-' || s[i] == '+' {
		if s[i] == '-' {
			sign = -1
		}
		i++
	}

	for ; i < len(s) && s[i] <= '9' && s[i] >= '0'; i++ {
		val = val*10 + sign*int(s[i]-'0')
		if val >= math.MaxInt32 {
			return math.MaxInt32
		}
		if val <= math.MinInt32 {
			return math.MinInt32
		}
	}
	return val
}

// @lc code=end