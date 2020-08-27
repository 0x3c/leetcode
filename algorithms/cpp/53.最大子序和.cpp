#include <iostream>
#include <unordered_map>
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
  int maxSubArray(vector<int>& nums) {
    int max_n = nums[0];
    int sum = 0;
    for (int i = 0; i < nums.size(); i++) {
      if (sum > 0) {
        sum += nums[i];
      } else {
        sum = nums[i];
      }
      max_n = max(sum, max_n);
    }
    return max_n;
  }
};
// @lc code=end
