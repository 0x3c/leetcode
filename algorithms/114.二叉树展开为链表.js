/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (64.91%)
 * Likes:    179
 * Dislikes: 0
 * Total Accepted:    14.4K
 * Total Submissions: 22.1K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给定一个二叉树，原地将它展开为链表。
 *
 * 例如，给定二叉树
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 *
 * 将其展开为：
 *
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function backtrack(head, queue) {
  if (!head) return;
  const { left, right } = head;
  queue.push(head.val);
  if (left) {
    backtrack(left, queue);
  }
  if (right) {
    backtrack(right, queue);
  }
}
/**
 * 按从左到右顺序回溯所有数字, 按顺序生成新树。
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const queue = [];
  backtrack(root, queue);
  let p = root;
  queue.shift();
  while (queue.length) {
    p.right = new TreeNode(queue.shift());
    p.left = null;
    p = p.right;
  }
};
