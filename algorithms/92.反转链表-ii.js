/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (46.56%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    20.3K
 * Total Submissions: 43.3K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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
 * 将链表以 m, n 两点分成三段, 倒序第m-n个节点, 将三段链表拼接起来
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let front = new ListNode(null),
    fp = front,
    back = new ListNode(null),
    bp = back,
    list = [];
  i = 1;
  while (head) {
    const tmpNode = head;
    head = head.next;
    tmpNode.next = null;
    if (i < m) {
      fp.next = tmpNode;
      fp = fp.next;
    }
    if (i > n) {
      bp.next = tmpNode;
      bp = bp.next;
    }
    if (i >= m && i <= n) {
      list.push(tmpNode);
    }
    i++;
  }
  while (list.length) {
    const tmpNode = list.pop();
    fp.next = tmpNode;
    fp = fp.next;
  }
  fp.next = back.next;
  return front.next;
};
