#include <iostream>
#include <unordered_map>

using namespace std;
/*
 * @lc app=leetcode.cn id=1081 lang=cpp
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
class Solution {
 private:
  unordered_map<char, int> char_couter;

 public:
  string smallestSubsequence(string text) {
    string ans;
    for (auto ch : text) {
      char_couter[ch] = char_couter.count(ch) ? char_couter[ch] + 1 : 1;
    }
    for (int i = 0; i < text.size(); i++) {
      char ch = text[i];
      if (ans.find(ch) == ans.npos) {
        while (!ans.empty() && ch < ans.back() && char_couter[ans.back()] > 0) {
          ans.pop_back();
        }
        ans.push_back(ch);
      }
      char_couter[ch]--;
    }
    return ans;
  }
};
// @lc code=end
