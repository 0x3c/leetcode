/*
 * @lc app=leetcode.cn id=20 lang=golang
 *
 * [20] 有效的括号
 */

// @lc code=start
func isValid(s string) bool {
	hash := map[byte]byte{
		'{': '}',
		'[': ']',
		'(': ')',
	}
	stack := []byte{}
	for _, ch := range []byte(s) {
		val, ok := hash[ch]
		if ok {
			stack = append(stack, val)
		} else if len(stack) == 0 || stack[len(stack)-1] != ch {
			return false
		} else {
			stack = stack[0 : len(stack)-1]
		}
	}
	return len(stack) == 0
}

// @lc code=end
