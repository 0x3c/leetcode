/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
 *
 * https://leetcode-cn.com/problems/increasing-order-search-tree/description/
 *
 * algorithms
 * Easy (61.09%)
 * Likes:    37
 * Dislikes: 0
 * Total Accepted:    4.7K
 * Total Submissions: 7.6K
 * Testcase Example:  '[5,3,6,2,4,null,8,1,null,null,null,7,9]'
 *
 * 给定一个树，按中序遍历重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。
 *
 *
 *
 * 示例 ：
 *
 * 输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]
 *
 * ⁠      5
 * ⁠     / \
 * ⁠   3    6
 * ⁠  / \    \
 * ⁠ 2   4    8
 * /        / \
 * 1        7   9
 *
 * 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 *
 * ⁠1
 * \
 * 2
 * \
 * 3
 * \
 * 4
 * \
 * 5
 * \
 * 6
 * \
 * 7
 * \
 * 8
 * \
 * ⁠                9
 *
 *
 *
 * 提示：
 *
 *
 * 给定树中的结点数介于 1 和 100 之间。
 * 每个结点都有一个从 0 到 1000 范围内的唯一整数值。
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  const queue = [root],
    nums = [root.val];
  while (queue.length) {
    const node = queue.shift();
    const index = nums.indexOf(node.val); // 所有节点值需要唯一
    if (node.right) {
      queue.unshift(node.right);
      // 放在当前值右侧
      nums.splice(index + 1, 0, node.right.val);
    }
    if (node.left) {
      queue.unshift(node.left);
      // 放在当前值左侧
      nums.splice(index, 0, node.left.val);
    }
  }
  let head = new TreeNode(null),
    pointer = head;
  while (nums.length) {
    const num = nums.shift();
    pointer.right = new TreeNode(num);
    pointer = pointer.right;
  }
  return head.right;
};
// @lc code=end
