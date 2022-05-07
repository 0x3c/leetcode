/*
 * @lc app=leetcode.cn id=58 lang=golang
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
func lengthOfLastWord(s string) int {
	size := len(s)
	start, end := 0, size
	for i := size - 1; i > -1; i-- {
		if end == size && s[i] != ' ' {
			end = i
		}
		if end != size && s[i] == ' ' {
			start = i + 1
			break
		}
	}
	return end - start + 1
}

// @lc code=end

