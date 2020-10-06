#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=53 lang=cpp
 *
 * [53] 最大子序和
 */

// @lc code=start
class Solution {
 public:
  /**
   * 状态数组: opt[i] 为 以 i为结尾的前 i个元素的最大值
   * 状态转移方程: f(i)=max(f(i-1)+nums[i],nums[i]);
   */
  int maxSubArray(vector<int>& nums) {
    int len = nums.size();
    int max_ans = nums[0];
    for (int i = 1; i < len; i++) {
      nums[i] = max(nums[i - 1], 0) + nums[i];
      max_ans = max(max_ans, nums[i]);
    }
    return max_ans;
  }
};
// @lc code=end
