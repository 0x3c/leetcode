/*
 * @lc app=leetcode.cn id=22 lang=golang
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * 递归 + 剪枝
 */
func generateParenthesis(n int) []string {
	ans := []string{}
	var dfs func(left, right int, cur string)
	dfs = func(left, right int, cur string) {
		if left == 0 && right == 0 {
			ans = append(ans, cur)
			return
		}
		if left > 0 {
			dfs(left-1, right, cur+"(")
		}
		if right > 0 && left < right {
			dfs(left, right-1, cur+")")
		}
	}
	dfs(n, n, "")
	return ans
}

// @lc code=end
