#include <string>
#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=22 lang=cpp
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * 递归
 * 通过条件 - 当前位置右括号数量不能大于左括号数量
 * 这一条件, 来实现剪枝, 去除非法括号对.
 */
class Solution {
 public:
  void recur(int left, int right, int n, string s, vector<string>& ans) {
    //  terminator
    if (left == n && right == n) {
      ans.push_back(s);
      return;
    }
    // process current login
    // drill down
    if (left < n) recur(left + 1, right, n, s + '(', ans);
    if (right < left && right < n) recur(left, right + 1, n, s + ')', ans);
    // restore state
  }
  vector<string> generateParenthesis(int n) {
    int left = 0, right = 0;
    vector<string> ans;
    recur(left, right, n, "", ans);
    return ans;
  }
};
// @lc code=end
