/*
 * @lc app=leetcode.cn id=142 lang=golang
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return nil
	}
	walker, runner := head.Next, head.Next.Next
	for ; runner != nil && runner.Next != nil; walker, runner = walker.Next, runner.Next.Next {
		if walker == runner {
			for ; head != walker; head, walker = head.Next, walker.Next {
			}
			return head
		}
	}
	return nil
}

// @lc code=end
