/*
 * @lc app=leetcode.cn id=590 lang=golang
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */
/**
 * 递归
 * 时间复杂度 O(n) - n 为节点个树
 * 空间复杂度 O(n) - n 为递归栈层数
 */
func postorder(root *Node) []int {
	ans := []int{}
	if root == nil {
		return ans
	}
	for _, node := range root.Children {
		ans = append(ans, postorder(node)...)
	}
	ans = append(ans, root.Val)
	return ans
}

// @lc code=end

