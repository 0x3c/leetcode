/*
 * @lc app=leetcode.cn id=102 lang=golang
 *
 * [102] 二叉树的层序遍历
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
 * BFS
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
func levelOrder_1(root *TreeNode) [][]int {
	ans := [][]int{}
	if root == nil {
		return ans
	}
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		size := len(queue)
		ret := []int{}
		for i := 0; i < size; i++ {
			node := queue[i]
			ret = append(ret, node.Val)
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		queue = queue[size:]
		ans = append(ans, ret)
	}
	return ans
}

/**
 * DFS
 */
func levelOrder(root *TreeNode) [][]int {
	ans := [][]int{}
	if root == nil {
		return ans
	}
	var dfs func(node *TreeNode, level int)
	dfs = func(node *TreeNode, level int) {
		if node == nil {
			return
		}
		if len(ans) <= level {
			ans = append(ans, []int{})
		}
		ans[level] = append(ans[level], node.Val)
		if node.Left != nil {
			dfs(node.Left, level+1)
		}
		if node.Right != nil {
			dfs(node.Right, level+1)
		}
	}
	dfs(root, 0)
	return ans
}

// @lc code=end
