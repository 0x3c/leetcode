#include <iostream>
#include <string>

using namespace std;
/*
 * @lc app=leetcode.cn id=557 lang=cpp
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
class Solution {
 public:
  string reverseWords(string s) {
    string ans;
    int i = 0, j = 0;
    while (j <= s.size() && i < s.size()) {
      if (s[j] == ' ' || j == s.size()) {
        for (int k = j - 1; k >= i; k--) {
          ans.push_back(s[k]);
        }
        if (s[j] == ' ') ans.push_back(' ');
        i = j + 1;
      }
      j++;
    }
    return ans;
  }
};
// @lc code=end
