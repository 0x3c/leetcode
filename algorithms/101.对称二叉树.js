/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (48.41%)
 * Likes:    444
 * Dislikes: 0
 * Total Accepted:    55.2K
 * Total Submissions: 113.9K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 * 说明:
 *
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * 与 #100 类似, #100 比较的是两颗树相同的位置, 本题比较的是两个子节点的镜像节点
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  const queue = [[root.left, root.right]];
  let tmp = null;
  while ((tmp = queue.shift())) {
    const [ln, rn] = tmp;
    if (!ln && !rn) continue;
    if (!ln || !rn) return false;
    if (ln.val !== rn.val) return false;
    queue.push([ln.left, rn.right]);
    queue.push([rn.left, ln.right]);
  }
  return true;
};
