/*
 * @lc app=leetcode.cn id=17 lang=golang
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start

/**
 * 回溯
 */
func letterCombinations(digits string) []string {
	ans := []string{}
	if len(digits) == 0 {
		return ans
	}
	m := []string{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}

	var recursion func(level int, cur string)
	recursion = func(level int, cur string) {
		if level == len(digits) {
			ans = append(ans, cur)
			return
		}
		for _, v := range m[digits[level]-'0'] {
			recursion(level+1, cur+string(v))
		}
	}
	recursion(0, "")
	return ans
}

// @lc code=end
