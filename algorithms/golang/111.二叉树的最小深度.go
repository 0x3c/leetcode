/*
 * @lc app=leetcode.cn id=111 lang=golang
 *
 * [111] 二叉树的最小深度
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
 * 递归 - 如果元素只有一个节点，则需要包含该节点，比如二叉树退化为链表，则返回链表的长度
 *
 */
func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	if root.Left == nil && root.Right != nil {
		return minDepth(root.Right) + 1
	}
	if root.Right == nil && root.Left != nil {
		return minDepth(root.Left) + 1
	}
	min := func(a, b int) int {
		if a < b {
			return a
		} else {
			return b
		}
	}
	return min(minDepth(root.Left)+1, minDepth(root.Right)+1)
}

// @lc code=end
