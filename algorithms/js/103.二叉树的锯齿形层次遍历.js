/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (51.53%)
 * Likes:    90
 * Dislikes: 0
 * Total Accepted:    18.2K
 * Total Submissions: 35.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回锯齿形层次遍历如下：
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
 * 层次遍历 + 根据层次改变遍历方向s
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let queue = [[root]],
    tmps = null,
    res = [],
    order = 0;
  while ((tmps = queue.shift())) {
    const curs = [],
      newQueue = [];
    for (let i = 0; i < tmps.length; i++) {
      if (!tmps[i]) continue;
      order % 2 === 0 ? curs.push(tmps[i].val) : curs.unshift(tmps[i].val);
      tmps[i].left && newQueue.push(tmps[i].left);
      tmps[i].right && newQueue.push(tmps[i].right);
    }
    newQueue.length && queue.push(newQueue);
    curs.length && res.push(curs);
    order += 1;
  }
  return res;
};
