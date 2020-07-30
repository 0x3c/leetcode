/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (66.22%)
 * Likes:    568
 * Dislikes: 0
 * Total Accepted:    130.7K
 * Total Submissions: 197.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例:
 *
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 *
 *
 */

// @lc code=start
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let newHead = new ListNode(null);
  newHead.next = head;
  let prev = newHead;
  while (head && head.next) {
    const walker = head;
    const runner = head.next;
    prev.next = runner;
    walker.next = runner.next;
    runner.next = walker;
    prev = walker;
    head = walker.next;
  }
  return newHead.next;
};
// @lc code=end
