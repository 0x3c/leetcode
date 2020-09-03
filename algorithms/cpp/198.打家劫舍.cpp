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
 private:
  vector<int> dp;

 public:
  int rob(vector<int>& nums) {
    int ans = 0;
    dp.resize(nums.size() + 1);
    dp[0] = 0;
    for (int i = 0; i < nums.size(); i++) {
      dp[i + 1] = max(dp[i], (i - 1 < 0 ? 0 : dp[i - 1]) + nums[i]);
    }
    return dp.back();
  }
};
// @lc code=end
