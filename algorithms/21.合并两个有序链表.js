/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (56.46%)
 * Likes:    581
 * Dislikes: 0
 * Total Accepted:    99.2K
 * Total Submissions: 175.2K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let res = new ListNode(null),
    pointer = res;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      pointer.next = l2;
      l2 = l2.next;
    } else {
      pointer.next = l1;
      l1 = l1.next;
    }
    pointer = pointer.next;
    pointer.next = null;
  }
  l1 && (pointer.next = l1);
  l2 && (pointer.next = l2);
  return res.next;
};
