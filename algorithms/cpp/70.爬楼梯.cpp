/*
 * @lc app=leetcode.cn id=70 lang=cpp
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
 public:
  int climbStairs(int n) {
    int cur = 2, pre = 1;
    if (n <= 3) return n;
    for (int i = 2; i < n; i++) {
      int tmp = cur;
      cur += pre;
      pre = tmp;
    }
    return cur;
  }
};
// @lc code=end
