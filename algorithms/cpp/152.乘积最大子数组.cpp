#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=152 lang=cpp
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
class Solution {
 public:
  int maxProduct(vector<int>& nums) {
    int len = nums.size();
    vector<int> min_dp(len, 1);
    min_dp[0] = nums[0];
    for (int i = 1; i < len; i++) {
      min_dp[i] =
          min(min_dp[i - 1] * nums[i], min(nums[i], nums[i - 1] * nums[i]));
      nums[i] =
          max(nums[i - 1] * nums[i], max(nums[i], min_dp[i - 1] * nums[i]));
    }
    return *max_element(nums.begin(), nums.end());
  }
};
// @lc code=end
