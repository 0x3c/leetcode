/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 *
 * https://leetcode-cn.com/problems/maximum-binary-tree/description/
 *
 * algorithms
 * Medium (76.21%)
 * Likes:    83
 * Dislikes: 0
 * Total Accepted:    6.8K
 * Total Submissions: 8.9K
 * Testcase Example:  '[3,2,1,6,0,5]'
 *
 * 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
 *
 *
 * 二叉树的根是数组中的最大元素。
 * 左子树是通过数组中最大值左边部分构造出的最大二叉树。
 * 右子树是通过数组中最大值右边部分构造出的最大二叉树。
 *
 *
 * 通过给定的数组构建最大二叉树，并且输出这个树的根节点。
 *
 *
 *
 * 示例 ：
 *
 * 输入：[3,2,1,6,0,5]
 * 输出：返回下面这棵树的根节点：
 *
 * ⁠     6
 * ⁠   /   \
 * ⁠  3     5
 * ⁠   \    /
 * ⁠    2  0
 * ⁠      \
 * ⁠       1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 给定的数组的大小在 [1, 1000] 之间。
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
/**
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMaxNumIdx(nums) {
  const maxNum = Math.max.apply(null, nums);
  return nums.indexOf(maxNum);
}
/**
 *
 * @param {number[]} nums
 * @param {string} direction
 * @param {TreeNode} tree
 */
function backtrack(nums, direction, tree) {
  if (!nums.length) return;
  const index = findMaxNumIdx(nums);
  tree[direction] = new TreeNode(nums[index]);
  const lefts = nums.slice(0, index);
  const rights = nums.slice(index + 1);
  backtrack(lefts, "left", tree[direction]);
  backtrack(rights, "right", tree[direction]);
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const head = new TreeNode();
  backtrack(nums, "right", head);
  return head.right;
};
// @lc code=end
