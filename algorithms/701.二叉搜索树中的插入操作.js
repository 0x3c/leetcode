/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
 *
 * https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/description/
 *
 * algorithms
 * Medium (67.34%)
 * Likes:    46
 * Dislikes: 0
 * Total Accepted:    8.2K
 * Total Submissions: 11.4K
 * Testcase Example:  '[4,2,7,1,3]\n5'
 *
 * 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 保证原始二叉搜索树中不存在新值。
 *
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。
 *
 * 例如,
 *
 *
 * 给定二叉搜索树:
 *
 * ⁠       4
 * ⁠      / \
 * ⁠     2   7
 * ⁠    / \
 * ⁠   1   3
 *
 * 和 插入的值: 5
 *
 *
 * 你可以返回这个二叉搜索树:
 *
 *
 * ⁠        4
 * ⁠      /   \
 * ⁠     2     7
 * ⁠    / \   /
 * ⁠   1   3 5
 *
 *
 * 或者这个树也是有效的:
 *
 *
 * ⁠        5
 * ⁠      /   \
 * ⁠     2     7
 * ⁠    / \
 * ⁠   1   3
 * ⁠        \
 * ⁠         4
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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  let pointer = root;
  const tn = new TreeNode(val);
  while (pointer) {
    if (val > pointer.val) {
      if (!pointer.right) {
        pointer.right = tn;
        break;
      } else {
        pointer = pointer.right;
      }
    } else {
      if (!pointer.left) {
        pointer.left = tn;
        break;
      } else {
        pointer = pointer.left;
      }
    }
  }
  return root;
};
// @lc code=end
