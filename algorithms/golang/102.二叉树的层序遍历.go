/*
 * @lc app=leetcode.cn id=102 lang=golang
 *
 * [102] 二叉树的层次遍历
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
func levelOrder(root *TreeNode) [][]int {
	ans := [][]int{}
	if root == nil {
		return ans
	}
	queue := [][]*TreeNode{}
	queue = append(queue, []*TreeNode{root})
	for len(queue) > 0 {
		task := queue[0]
		queue = queue[1:]
		cur_ans := []int{}
		new_tasks := []*TreeNode{}
		for i := 0; i < len(task); i++ {
			cur_ans = append(cur_ans, task[i].Val)
			if task[i].Left != nil {
				new_tasks = append(new_tasks, task[i].Left)
			}
			if task[i].Right != nil {
				new_tasks = append(new_tasks, task[i].Right)
			}
		}
		if len(new_tasks) > 0 {
			queue = append(queue, new_tasks)
		}
		if len(cur_ans) > 0 {
			ans = append(ans, cur_ans)
		}
	}
	return ans
}

// @lc code=end