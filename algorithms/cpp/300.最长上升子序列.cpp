#include <vector>
using namespace std;

/*
 * @lc app=leetcode.cn id=300 lang=cpp
 *
 * [300] 最长上升子序列
 */

// @lc code=start

class Solution {
 public:
  int lengthOfLIS(vector<int>& nums) {
    int ans = 1;
    int size = nums.size();
    vector<int> dp(size, 1);
    for (int i = 1; i < size; i++) {
      for (int j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = max(dp[j] + 1, dp[i]);
        }
      }
      ans = max(dp[i], ans);
    }
    return ans;
  }
};
// @lc code=end
