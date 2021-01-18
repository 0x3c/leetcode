import "strings"

/*
 * @lc app=leetcode.cn id=6 lang=golang
 *
 * [6] Z 字形变换
 */

// @lc code=start
func convert(s string, numRows int) string {

	if numRows == 1 || len(s) == 1 {
		return s
	}
	ans := make([]string, numRows)
	i, direction := 0, 1
	for _, ch := range s {
		if i == 0 {
			direction = 1
		}
		if i == numRows-1 {
			direction = -1
		}
		ans[i] = ans[i] + string(ch)
		i += direction
	}
	return strings.Join(ans, "")
}

// @lc code=end
