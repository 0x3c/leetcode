#include <iostream>
#include <string>
using namespace std;

/*
 * @lc app=leetcode.cn id=696 lang=cpp
 *
 * [696] 计数二进制子串
 */

// @lc code=start
class Solution {
 public:
  int countBinarySubstrings(string s) {
    int res = 0;
    if (s.size() == 0) return res;
    int before = 0, cur = 0, c = s[0];
    for (int i = 0; i < s.size(); i++) {
      if (s[i] == c) {
        cur++;
      } else {
        if (before != 0) res += min(before, cur);
        before = cur;
        c = s[i];
        cur = 1;
      }
    }
    res += min(before, cur);
    return res;
  }
};
// @lc code=end
