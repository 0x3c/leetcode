#include <iostream>
#include <vector>

using namespace std;

/**
 * Definition for a binary tree node.
 */
class TreeNode {
 public:
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x) : val(x){};
};

/*
 * @lc app=leetcode.cn id=94 lang=cpp
 *
 * [94] 二叉树的中序遍历
 */
// @lc code=start
class Solution {
 public:
  void dfs(TreeNode* root, vector<int>& ans) {
    if (root == NULL) return;
    if (root->left != NULL) {
      dfs(root->left, ans);
    }
    ans.push_back(root->val);
    if (root->right != NULL) {
      dfs(root->right, ans);
    }
  }
  vector<int> inorderTraversal(TreeNode* root) {
    vector<int> ans;
    if (root == NULL) return ans;
    dfs(root, ans);
    return ans;
  }
};
// @lc code=end
