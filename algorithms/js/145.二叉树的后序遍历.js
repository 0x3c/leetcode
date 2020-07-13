/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (67.46%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    33.1K
 * Total Submissions: 48.6K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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

// 后序遍历: 先遍历左子节点, 再遍历右子节点, 最后访问根节点

// @lc code=start
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];
  var res = [];
  /**
   * @param {TreeNode} node
   * @param {number[]} nums
   */
  function backtrack(node, nums) {
    node.left && backtrack(node.left, nums);
    node.right && backtrack(node.right, nums);
    nums.push(node.val);
  }
  backtrack(root, res);
  return res;
};
// @lc code=end
