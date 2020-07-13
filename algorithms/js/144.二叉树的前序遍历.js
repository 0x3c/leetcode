/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (61.65%)
 * Likes:    156
 * Dislikes: 0
 * Total Accepted:    43.6K
 * Total Submissions: 70.3K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [1,2,3]
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 前序遍历：从根节点起，先完整遍历左子树再完整遍历右子树。

/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return [];
  var res = [];
  /**
   *
   * @param {TreeNode} node
   * @param {number[]} nums
   */
  function backtrack(node, nums) {
    nums.push(node.val);
    node.left && backtrack(node.left, nums);
    node.right && backtrack(node.right, nums);
  }
  backtrack(root, res);
  return res;
};

// @lc code=start
/**
 * 非递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return [];
  var res = [],
    queue = [root];
  while (queue.length) {
    var node = queue[0];
    res.push(node.val);
    node.right && queue.splice(1, 0, node.right);
    queue.splice(0, 1);
    node.left && queue.splice(0, 0, node.left);
  }
  return res;
};
// @lc code=end
