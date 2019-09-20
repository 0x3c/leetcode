/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (51.48%)
 * Likes:    109
 * Dislikes: 0
 * Total Accepted:    9.2K
 * Total Submissions: 17.8K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例 1:
 *
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 *
 * 示例 2:
 *
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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
 * 长度为n的链表，取链表后 Math.ceil(n/2) 个元素于 queue，对前 Math.round(n/2) 个元素依次取queue中的元素插入。
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return;
  let len = 0,
    lp = head;
  while (lp) {
    len++;
    lp = lp.next;
  }
  lp = head;
  const queue = [];
  for (let i = 1; i < len + 1; i++) {
    if (i > Math.ceil(len / 2)) {
      queue.unshift(lp);
    }
    lp = lp.next;
  }
  lp = head;
  let insertNode = null;
  while ((insertNode = queue.shift())) {
    insertNode.next = null;
    const tmpNode = lp.next;
    lp.next = insertNode;
    lp = lp.next;
    lp.next = tmpNode;
    lp = lp.next;
  }
  lp.next = null;
};
