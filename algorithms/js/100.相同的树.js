/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (54.77%)
 * Likes:    225
 * Dislikes: 0
 * Total Accepted:    36.7K
 * Total Submissions: 66.9K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 *
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 示例 1:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 *
 * ⁠       [1,2,3],   [1,2,3]
 *
 * 输出: true
 *
 * 示例 2:
 *
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 *
 * ⁠       [1,2],     [1,null,2]
 *
 * 输出: false
 *
 *
 * 示例 3:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 *
 * ⁠       [1,2,1],   [1,1,2]
 *
 * 输出: false
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
 * 深度优先，递归
 * @param {object} p
 * @param {object} q
 */
function dfs(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return dfs(p.left, q.left) && dfs(p.right, q.right);
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree1 = function(p, q) {
  return dfs(p, q);
};

/**
 * 广度优先, 比较并维护队列中的节点
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const quene = [[p, q]];
  let tmp = null;

  while ((tmp = quene.shift())) {
    const [h1, h2] = tmp;
    if (!h1 && !h2) continue;
    if (!h1 || !h2) return false;
    if (h1.val !== h2.val) return false;
    quene.push([h1.left, h2.left]);
    quene.push([h1.right, h2.right]);
  }
  return true;
};
