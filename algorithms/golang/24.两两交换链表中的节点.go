/*
 * @lc app=leetcode.cn id=24 lang=golang
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	walker, runner, head := head, head.Next, head.Next
	var prev *ListNode
	for {
		if prev != nil {
			prev.Next = runner
		}
		walker.Next = runner.Next
		runner.Next = walker
		prev = walker
		if walker.Next == nil || walker.Next.Next == nil {
			break
		}
		walker, runner = walker.Next, walker.Next.Next
	}
	return head
}

// @lc code=end