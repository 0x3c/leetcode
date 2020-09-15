#include <iostream>

using namespace std;
/*
 * @lc app=leetcode.cn id=367 lang=cpp
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
class Solution {
 public:
  bool isPerfectSquare(int num) {
    if (num == 1) return true;
    long x = num / 2;
    while (x * x > num) {
      x = (x + num / x) / 2;
    }
    return x * x == num;
  }
};
// @lc code=end
