/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (70.89%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    76.3K
 * Total Submissions: 107.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 *
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最大深度 3 。
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
 * @param {object} head
 * @param {object} obj
 * @param {number} cur
 */
function dfs(head, obj, cur) {
  if (!head) return;
  cur += 1;
  obj.count = cur > obj.count ? cur : obj.count;
  if (head.left) dfs(head.left, obj, cur);
  if (head.right) dfs(head.right, obj, cur);
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  const res = { count: 0 };
  dfs(root, res, 0);
  return res.count;
};
