#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=77 lang=cpp
 *
 * [77] 组合
 */

// @lc code=start
class Solution {
 private:
  using return_type = vector<vector<int> >;
  void dfs(int n, int k, int cur, vector<int>& cur_ans, return_type& ans) {
    if (cur_ans.size() == k) {
      ans.push_back(cur_ans);
      return;
    }
    for (int i = cur; i < n + 1; i++) {
      cur_ans.push_back(i);
      dfs(n, k, i + 1, cur_ans, ans);
      cur_ans.pop_back();
    }
  }

 public:
  return_type combine(int n, int k) {
    return_type ans;
    vector<int> cur_ans;
    dfs(n, k, 1, cur_ans, ans);
    return ans;
  }
};
// @lc code=end
