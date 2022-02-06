/*
 * @lc app=leetcode.cn id=429 lang=golang
 *
 * [429] N 叉树的层序遍历
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
 * 广度优先
 * 处理当前层，并将所有下层元素入队，循环处理，直至队列为空
 * 时间复杂度：O(n)，n 为节点数量
 * 空间复杂度：O(n)
 */
func levelOrder(root *Node) [][]int {
	ans := [][]int{}
	if root == nil {
		return ans
	}
	queue := []*Node{root}
	for len(queue) != 0 {
		cur_ans := []int{}
		newTask := []*Node{}
		for _, node := range queue {
			cur_ans = append(cur_ans, node.Val)
			newTask = append(newTask, node.Children...)
		}
		ans = append(ans, cur_ans)
		queue = newTask
	}
	return ans
}

// @lc code=end

