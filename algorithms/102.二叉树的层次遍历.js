/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (58.64%)
 * Likes:    275
 * Dislikes: 0
 * Total Accepted:    44.7K
 * Total Submissions: 76.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层次遍历结果：
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = [[root]],
    list = [],
    tmp = null;
  while ((tmp = queue.shift())) {
    const subs = [],
      subQ = [];
    for (let i = 0; i < tmp.length; i++) {
      if (!tmp[i]) continue;
      subs.push(tmp[i].val);
      subQ.push(tmp[i].left);
      subQ.push(tmp[i].right);
    }
    subs.length && list.push(subs);
    subQ.length && queue.push(subQ);
  }
  return list;
};
