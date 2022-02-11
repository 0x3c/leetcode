package main

/*
 * @lc app=leetcode.cn id=98 lang=golang
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
/**
 * 中序遍历
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
func isValidBST(root *TreeNode) bool {
	if root == nil {
		return true
	}
	var dfs func(node *TreeNode) []int
	dfs = func(node *TreeNode) []int {
		ans := []int{}
		if node == nil {
			return ans
		}
		ans = append(ans, dfs(node.Left)...)
		ans = append(ans, node.Val)
		ans = append(ans, dfs(node.Right)...)
		return ans
	}
	ans := dfs(root)
	size := len(ans)
	if size < 2 {
		return true
	}
	for i := 1; i < size; i++ {
		if ans[i] <= ans[i-1] {
			return false
		}
	}
	return true
}

// @lc code=end

func main() {

}
