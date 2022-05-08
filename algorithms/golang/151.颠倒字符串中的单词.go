/*
 * @lc app=leetcode.cn id=151 lang=golang
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
func split(s string) []string {
	ret := []string{}
	for start := 0; start < len(s); {
		for start < len(s) && s[start] == ' ' {
			start++
		}
		if start >= len(s) {
			break
		}
		end := start
		for end < len(s) && s[end] != ' ' {
			end++
		}
		ret = append(ret, s[start:end])
		start = end

	}
	return ret
}

func reverseArr(arr []string) {
	for l, r := 0, len(arr)-1; l < r; {
		arr[l], arr[r] = arr[r], arr[l]
		l++
		r--
	}
}
func join(list []string, sep string) string {
	ret := ""
	for i, str := range list {
		if i > 0 {
			ret += sep
		}
		ret += str
	}
	return ret
}
func reverseWords(s string) string {
	list := split(s)
	reverseArr(list)
	return join(list, " ")
}

// @lc code=end
