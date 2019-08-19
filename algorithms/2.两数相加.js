/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (35.24%)
 * Likes:    2858
 * Dislikes: 0
 * Total Accepted:    183.9K
 * Total Submissions: 521.3K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 *
 *
 */
/* *
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
var addTwoNumbers = function(l1, l2) {
  const l3 = new ListNode(null);
  let carry = 0,
    sum = 0,
    head = l3,
    l1Head = l1,
    l2Head = l2;
  while (l1Head || l2Head) {
    let tmp = 0;
    if (l1Head && l2Head) {
      tmp = l1Head.val + l2Head.val;
    } else {
      tmp = l1Head ? l1Head.val : l2Head.val;
    }
    sum = (tmp + carry) % 10;
    carry = Math.floor((tmp + carry) / 10);
    head.next = new ListNode(sum);
    head = head.next;
    l1Head && (l1Head = l1Head.next);
    l2Head && (l2Head = l2Head.next);
  }
  carry && (head.next = new ListNode(carry));
  return l3.next;
};
