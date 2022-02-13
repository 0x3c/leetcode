/*
 * @lc app=leetcode.cn id=77 lang=golang
 *
 * [77] 组合
 */

// @lc code=start
/**
 * 递归
 */
func combine(n int, k int) [][]int {
	ans := [][]int{}
	if k == 0 {
		return ans
	}
	cur := []int{}
	var dfs func(i int)
	dfs = func(i int) {
		if len(cur) == k {
			comb := make([]int, k)
			copy(comb, cur)
			ans = append(ans, comb)
			return
		}
		if i > n {
			return
		}
		cur = append(cur, i)
		dfs(i + 1)
		cur = cur[:len(cur)-1]
		dfs(i + 1)
	}
	dfs(1)
	return ans
}

// @lc code=end