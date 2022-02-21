/*
 * @lc app=leetcode.cn id=105 lang=golang
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * 时间复杂度：O(n) 每个元素遍历一遍
 * 空间复杂度：O(n) 递归栈占用空间
 */
func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil
	}
	root := &TreeNode{preorder[0], nil, nil}
	i := 0
	for inorder[i] != preorder[0] {
		i++
	}
	root.Left = buildTree(preorder[1:len(inorder[0:i])+1], inorder[0:i])
	root.Right = buildTree(preorder[len(inorder[0:i])+1:], inorder[i+1:])
	return root
}

// @lc code=end
