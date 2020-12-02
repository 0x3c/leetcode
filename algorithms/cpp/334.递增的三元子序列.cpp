#include <vector>
using std::vector;
/*
 * @lc app=leetcode.cn id=334 lang=cpp
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
class Solution {
 public:
  bool increasingTriplet(vector<int>& nums) {
    int min = INT_MAX, mid = INT_MAX;
    for (int n : nums) {
      if (n <= min) {
        min = n;
      } else if (n <= mid) {
        mid = n;
      } else {
        return true;
      }
    }
    return false;
  }
};
// @lc code=end
