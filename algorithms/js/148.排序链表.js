/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (61.58%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    23.1K
 * Total Submissions: 37.3K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 *
 * 示例 1:
 *
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 *
 *
 * 示例 2:
 *
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
 * 以值为键存入哈希表, 并链接起来, 根据表键排序，排序结果生成新链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList1 = function(head) {
  if (!head) return null;
  let hashmap = {},
    lp = head;
  while (lp) {
    let tmpnode = hashmap[lp.val],
      index = lp.val;
    if (tmpnode) {
      let parent = tmpnode;
      while (tmpnode.next) {
        tmpnode = tmpnode.next;
      }
      tmpnode.next = lp;
    } else {
      hashmap[lp.val] = lp;
    }
    lp = lp.next;
    tmpnode ? (tmpnode.next.next = null) : (hashmap[index].next = null);
  }
  head = new ListNode(null);
  let curr = head;
  const sortedKeys = Object.keys(hashmap).sort((a, b) => a - b);
  for (let key of sortedKeys) {
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = hashmap[key];
  }
  return head.next;
};

/**
 * 以值为键存入哈希表对应数组, 根据表键排序，排序结果生成新链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head) return null;
  let hashmap = {},
    lp = head;
  while (lp) {
    let nodeList = hashmap[lp.val],
      index = lp.val;
    if (!nodeList) {
      nodeList = [];
    }
    nodeList.push(lp);
    hashmap[lp.val] = nodeList;
    lp = lp.next;
    nodeList[nodeList.length - 1].next = null;
  }
  head = new ListNode(null);
  let curr = head;
  const sortedKeys = Object.keys(hashmap).sort((a, b) => a - b);
  for (let key of sortedKeys) {
    const list = hashmap[key];
    for (let node of list) {
      curr.next = node;
      curr = curr.next;
    }
  }
  return head.next;
};
