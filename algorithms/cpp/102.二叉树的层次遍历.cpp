#include <deque>
#include <iostream>
#include <vector>

using namespace std;

/*
 * @lc app=leetcode.cn id=102 lang=cpp
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
 * 给定一个二叉树，返回其按层次遍历的节点值。
 * （即逐层地，从左到右访问所有节点）。
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
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
 public:
  vector<vector<int>> levelOrder(TreeNode *root) {
    vector<vector<int>> ans;
    if (root == nullptr) return ans;
    deque<vector<TreeNode *>> queue = {{root}};
    while (!queue.empty()) {
      vector<TreeNode *> tasks = queue.at(0);
      vector<int> cur_ans;
      vector<TreeNode *> new_tasks;
      for (auto iter : tasks) {
        cur_ans.push_back(iter->val);
        if (iter->left != nullptr) new_tasks.push_back(iter->left);
        if (iter->right != nullptr) new_tasks.push_back(iter->right);
      }
      queue.pop_front();
      if (!new_tasks.empty()) queue.push_back(new_tasks);
      if (!cur_ans.empty()) ans.push_back(cur_ans);
    }
    return ans;
  }
};
// @lc code=end
