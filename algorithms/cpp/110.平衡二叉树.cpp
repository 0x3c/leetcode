#include <iostream>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
/*
 * @lc app=leetcode.cn id=110 lang=cpp
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
class Solution {
 public:
  int dfs(TreeNode *root) {
    if (root == nullptr) {
      return 0;
    }
    int left = 0, right = 0;
    if (root->left == nullptr && root->right == nullptr) {
      return 1;
    }
    if (root->left != nullptr) {
      left = dfs(root->left);
    }
    if (root->right != nullptr) {
      right = dfs(root->right);
    }

    if (abs(right - left) > 1 || left == -1 || right == -1) {
      return -1;
    }

    return max(right + 1, left + 1);
  }
  bool isBalanced(TreeNode *root) {
    int level = dfs(root);
    if (level == -1)
      return false;
    else {
      return true;
    }
  }
};
// @lc code=end
