#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;
struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
/*
 * @lc app=leetcode.cn id=105 lang=cpp
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 private:
  unordered_map<int, int> preorder_hash;
  unordered_map<int, int> inorder_hash;
  TreeNode* dfs(const vector<int>& preorder, const vector<int>& inorder,
                int preorder_left, int preorder_right, int inorder_left,
                int inorder_right) {
    if (preorder_right < preorder_left) {
      return nullptr;
    }

    // 先序根索引
    int preorder_root = preorder_left;
    int preorder_root_val = preorder[preorder_root];

    // 中序根索引
    int inorder_root = inorder_hash[preorder_root_val];

    // 构建当前根节点
    TreeNode* node = new TreeNode(preorder_root_val);

    int left_subtree_size = inorder_root - inorder_left;

    // 构建左子树
    node->left =
        dfs(preorder, inorder, preorder_left + 1,
            preorder_left + left_subtree_size, inorder_left, inorder_root - 1);
    // 构建右子树
    node->right = dfs(preorder, inorder, preorder_left + 1 + left_subtree_size,
                      preorder_right, inorder_root + 1, inorder_right);
    return node;
  }

 public:
  TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    if (preorder.empty()) return nullptr;

    int n = preorder.size();
    for (int i = 0; i < preorder.size(); i++) {
      preorder_hash[preorder[i]] = i;
      inorder_hash[inorder[i]] = i;
    }

    return dfs(preorder, inorder, 0, n - 1, 0, n - 1);
  }
};
// @lc code=end
