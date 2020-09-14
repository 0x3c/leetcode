#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=547 lang=cpp
 *
 * [547] 朋友圈
 */

// @lc code=start
class Solution {
 private:
  void dfs(vector<vector<int> >& M, int k, vector<int>& visited) {
    if (visited[k] == 1) return;
    visited[k] = 1;
    // 第 k 个孩子的朋友
    for (int i = 0; i < M.size(); i++) {
      if (M[k][i] == 1) dfs(M, i, visited);
    }
  }

 public:
  int findCircleNum(vector<vector<int> >& M) {
    int ans = 0;
    vector<int> visited(M.size(), 0);
    for (int i = 0; i < M.size(); i++) {
      if (visited[i] == 0) {
        dfs(M, i, visited);
        ans++;
      }
    }
    return ans;
  }
};
// @lc code=end
