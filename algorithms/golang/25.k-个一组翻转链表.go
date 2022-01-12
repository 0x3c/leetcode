/*
 * @lc app=leetcode.cn id=25 lang=golang
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head, tail *ListNode) (*ListNode, *ListNode) {
	prev, pointer := head, head.Next
	head.Next = nil
	for {
		next := pointer.Next
		pointer.Next = prev
		prev = pointer
		pointer = next
		if prev == tail {
			break
		}
	}
	return prev, head
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	if k == 1 {
		return head
	}
	headBefore := &ListNode{Next: head}
	prev := headBefore
	for head != nil {
		for i := 1; i < k; i++ {
			head = head.Next
			if head == nil {
				return headBefore.Next
			}
		}
		next := head.Next
		first, last := reverseList(prev.Next, head)
		last.Next = next
		prev.Next = first
		prev, head = last, next
	}
	return headBefore.Next
}

// @lc code=end

