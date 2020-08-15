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
    if (digits.size() == 0) return ans;
    dfs(digits, 0, "", ans);
    return ans;
  }

 private:
  unordered_map<char, string> hash{
      {'2', "abc"}, {'3', "def"},  {'4', "ghi"}, {'5', "jkl"},
      {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"},
  };

  void dfs(string str, int i, string curAns, vector<string> &ans) {
    if (str.size() == i) {
      ans.push_back(curAns);
      return;
    }
    string str1 = hash[str[i]];
    auto iter = begin(str1);
    while (iter != end(str1)) {
      dfs(str, i + 1, curAns + (*iter++), ans);
    }
  };
};
// @lc code=end
