/*
 * @lc app=leetcode.cn id=21 lang=golang
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// 双指针，时间复杂度O(m+n)，空间复杂度O(1)。
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	ans := &ListNode{}
	head := ans
	for list1 != nil || list2 != nil {
		if list1 == nil {
			head.Next = list2
			list2 = list2.Next
		} else if list2 == nil {
			head.Next = list1
			list1 = list1.Next
		} else if list1.Val < list2.Val {
			head.Next = list1
			list1 = list1.Next
		} else {
			head.Next = list2
			list2 = list2.Next
		}
		head = head.Next
		head.Next = nil
	}
	return ans.Next
}

// @lc code=end

