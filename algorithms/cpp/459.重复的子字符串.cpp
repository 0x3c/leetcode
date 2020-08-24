#include <iostream>
#include <string>

using namespace std;
/*
 * @lc app=leetcode.cn id=459 lang=cpp
 *
 * [459] 重复的子字符串
 *
 */

// @lc code=start
class Solution {
 public:
  bool repeatedSubstringPattern(string s) {
    return (s + s).find(s, 1) != s.size();
  }
};
// @lc code=end