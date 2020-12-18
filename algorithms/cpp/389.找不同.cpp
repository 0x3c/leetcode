#include <string>
using std::string;
/*
 * @lc app=leetcode.cn id=389 lang=cpp
 *
 * [389] 找不同
 */

// @lc code=start
class Solution {
 public:
  char findTheDifference(string s, string t) {
    int ans = 0;
    for (int i = 0; i < t.size(); i++) {
      if (i < s.size()) {
        ans -= s[i] - 'a';
      }
      ans += t[i] - 'a';
    }
    return ans + 'a';
  }
};
// @lc code=end
