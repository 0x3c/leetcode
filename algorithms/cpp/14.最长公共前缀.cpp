#include <iostream>
#include <string>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=14 lang=cpp
 *
 * [14] 最长公共前缀
 */

// @lc code=start
class Solution {
 public:
  string longestCommonPrefix(vector<string>& strs) {
    string str;
    auto len = strs.size();
    if (len == 0) return str;
    if (len == 1) return strs[0];
    for (auto i = 0; i < strs[0].size(); i++) {
      for (auto j = 1; j < len; j++) {
        if (strs[j][i] != strs[0][i]) {
          return str;
        }
      }
      str.push_back(strs[0][i]);
    }
    return str;
  }
};
// @lc code=end
