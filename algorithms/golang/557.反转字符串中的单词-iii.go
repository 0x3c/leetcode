
import (
	"strings"
)

/*
 * @lc app=leetcode.cn id=557 lang=golang
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
// reverse will reverse strinrg
func reverse(s string) string {
	size := len(s)
	ans := []rune(s)
	for i := 0; i < size/2; i++ {
		ans[i], ans[size-i-1] = ans[size-i-1], ans[i]
	}
	return string(ans)
}

func reverseWords(s string) string {
	strs := strings.Split(s, " ")
	for i, str := range strs {
		strs[i] = reverse(str)
	}
	return strings.Join(strs, " ")
}

// @lc code=end
