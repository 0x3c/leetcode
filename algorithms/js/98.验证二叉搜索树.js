/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (27.58%)
 * Likes:    281
 * Dislikes: 0
 * Total Accepted:    39K
 * Total Submissions: 141.4K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
function checkInValid(n, nums) {
  return !!nums.some(({ v, r }) => (r === "max" ? n >= v : n <= v));
}
/**
 *
 * @param {TreeNode} node
 * @param {string} direction
 * @param {number[]} nums
 * @return {boolean}
 */
function dfs(node, nums) {
  if (!node) return true;
  const { left, right } = node;
  let leftValid, rightValid;
  if (left) {
    if (left.val >= node.val || checkInValid(left.val, nums)) {
      leftValid = false;
    } else {
      leftValid = dfs(left, [...nums, { v: node.val, r: "max" }]);
    }
  }
  if (right) {
    if (right.val <= node.val || checkInValid(right.val, nums)) {
      rightValid = false;
    } else {
      rightValid = dfs(right, [...nums, { v: node.val, r: "min" }]);
    }
  }
  if (leftValid === false || rightValid === false) {
    return false;
  } else {
    return true;
  }
}
/**
 * 深度优先，记住当前节点到根节点的值和比较规则
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return dfs(root, []);
};
// @lc code=end
