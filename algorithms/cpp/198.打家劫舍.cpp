#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=198 lang=cpp
 *
 * [198] 打家劫舍
 */

// @lc code=start
class Solution {
 public:
  /**
   * 状态数组: opt[i] 表示经过第 i 个房子偷到的最大金额
   * dp 方程: dp[i] = max(dp[i-1],dp[i-2] + nums[i])
   * */
  int rob(vector<int>& nums) {
    int len = nums.size();
    if (!len) return 0;
    if (len == 1) return nums[0];
    nums[1] = max(nums[0], nums[1]);
    for (int i = 2; i < len; i++) {
      nums[i] = max(nums[i - 1], nums[i - 2] + nums[i]);
    }
    return nums[len - 1];
  }
};
// @lc code=end
