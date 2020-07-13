/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
 *
 * https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/description/
 *
 * algorithms
 * Easy (42.83%)
 * Likes:    15
 * Dislikes: 0
 * Total Accepted:    2K
 * Total Submissions: 4.4K
 * Testcase Example:  '[1,0,1,0,1,0,1]'
 *
 * 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。例如，如果路径为 0 -> 1 -> 1
 * -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
 *
 * 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
 *
 * 以 10^9 + 7 为模，返回这些数字之和。
 *
 *
 *
 * 示例：
 *
 *
 *
 * 输入：[1,0,1,0,1,0,1]
 * 输出：22
 * 解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中的结点数介于 1 和 1000 之间。
 * node.val 为 0 或 1 。
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *
 * @param {TreeNode} head
 * @param {string} str
 * @param {string[][]} list
 */
function backtrack(head, str, list) {
  str += head.val;
  if (!head.left && !head.right) return list.push(parseInt(str, 2));
  if (head.left) backtrack(head.left, str, list);
  if (head.right) backtrack(head.right, str, list);
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  const list = [];
  backtrack(root, "", list);
  return list.reduce((acc, n) => ((acc += n), acc), 0);
};
