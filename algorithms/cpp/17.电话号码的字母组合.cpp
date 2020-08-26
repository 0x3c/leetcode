#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

/*
 * @lc app=leetcode.cn id=17 lang=cpp
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
class Solution {
 public:
  vector<string> letterCombinations(string digits) {
    vector<string> ans;
    dfs(digits, 0, "", ans);
    return ans;
  }

 private:
  unordered_map<char, string> hash{
      {'2', "abc"}, {'3', "def"},  {'4', "ghi"}, {'5', "jkl"},
      {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"},
  };
  void dfs(const string& digits, int i, const string& cur_ans,
           vector<string>& ans) {
    if (i >= digits.size() && !cur_ans.empty()) {
      ans.push_back(cur_ans);
      return;
    }
    string cur_str = hash[digits[i]];
    for (int j = 0; j < cur_str.size(); j++) {
      dfs(digits, i + 1, cur_ans + cur_str[j], ans);
    }
  }
};
// @lc code=end
