/*
 * @lc app=leetcode.cn id=387 lang=golang
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
func firstUniqChar(s string) int {
	count := make([]int, 26)
	for _, ch := range s {
		count[ch-'a']++
	}
	for i, ch := range s {
		if count[ch-'a'] == 1 {
			return i
		}
	}
	return -1
}

// @lc code=end
