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
    vector<int> dp(len + 1, 0);
    dp[1] = nums[0];
    for (int i = 2; i < len + 1; i++) {
      dp[i] = max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[len];
  }
};
// @lc code=end
