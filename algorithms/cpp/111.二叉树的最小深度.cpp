#include <iostream>
#include <queue>
#include <vector>

using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
/*
 * @lc app=leetcode.cn id=111 lang=cpp
 *
 * [111] 二叉树的最小深度
 */

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
  int minDepth(TreeNode *root) {
    int level = 0;
    if (root == nullptr) return level;
    vector<TreeNode *> first_task = {root};
    queue<vector<TreeNode *> > que;
    que.push((first_task));
    while (!que.empty()) {
      level++;
      vector<TreeNode *> cur_tasks = que.front();
      vector<TreeNode *> new_tasks;
      for (auto node : cur_tasks) {
        if (node->left == nullptr && node->right == nullptr) {
          return level;
        }
        if (node->left != nullptr) {
          new_tasks.push_back(node->left);
        }
        if (node->right != nullptr) {
          new_tasks.push_back(node->right);
        }
      }
      if (!new_tasks.empty()) que.push(new_tasks);
      que.pop();
    }
    return level;
  }
};
// @lc code=end
