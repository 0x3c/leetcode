/*
 * @lc app=leetcode.cn id=589 lang=golang
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func preorder(root *Node) []int {
	ans := []int{}
	if root == nil {
		return ans
	}
	ans = append(ans, root.Val)
	for _, node := range root.Children {
		ans = append(ans, preorder(node)...)
	}
	return ans
}

// @lc code=end

