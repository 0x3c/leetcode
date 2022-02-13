/*
 * @lc app=leetcode.cn id=104 lang=golang
 *
 * [104] 二叉树的最大深度
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
 * 递归
 */
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	if root.Left == nil && root.Right == nil {
		return 1
	}
	left := maxDepth(root.Left) + 1
	right := maxDepth(root.Right) + 1
	max := func(a, b int) int {
		if a > b {
			return a
		} else {
			return b
		}
	}
	return max(left, right)
}

// @lc code=end
