#include <string>
using namespace std;

/*
 * @lc app=leetcode.cn id=392 lang=cpp
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * using two pointer
 * 时间复杂度: O(m)
 */
class Solution {
 public:
  bool isSubsequence(string s, string t) {
    int lp = 0, rp = 0;
    while (lp < s.size() && rp < t.size()) {
      if (s[lp] == t[rp]) {
        lp++;
      }
      rp++;
    }
    if (lp == s.size()) return true;
    return false;
  }
};
// @lc code=end