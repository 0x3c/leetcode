/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (49.06%)
 * Likes:    446
 * Dislikes: 0
 * Total Accepted:    121.4K
 * Total Submissions: 223.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *
 *
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 *
 *
 * 示例 1:
 *
 * 给定二叉树 [3,9,20,null,null,15,7]
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回 true 。
 *
 * 示例 2:
 *
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 *
 *
 * 返回 false 。
 *
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function dfs(root) {
  if (!root) return 0;
  const left = dfs(root.left);
  const right = dfs(root.right);
  if (left === -1 || right === -1 || Math.abs(right - left) > 1) {
    return -1;
  } else {
    return Math.max(right, left) + 1;
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return dfs(root) >= 0;
};
// @lc code=end
