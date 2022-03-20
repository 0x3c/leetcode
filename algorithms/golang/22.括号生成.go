/*
 * @lc app=leetcode.cn id=22 lang=golang
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * 递归 + 剪枝
 */
func generateParenthesis_1(n int) []string {
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

/**
 * BFS
 */
func generateParenthesis(n int) []string {
	ans := []string{}
	q := []string{"("}
	for len(q) > 0 {
		size := len(q)
		for i := 0; i < size; i++ {
			node := q[i]
			if len(node) == n*2 {
				ans = append(ans, node)
				continue
			}
			left, right := 0, 0
			for _, ch := range node {
				if ch == '(' {
					left++
				} else {
					right++
				}
			}
			if left > right {
				q = append(q, string(append([]byte(node), ')')))
			}
			if left < n {
				q = append(q, string(append([]byte(node), '(')))
			}
		}
		q = q[size:]

	}
	return ans
}

// @lc code=end
