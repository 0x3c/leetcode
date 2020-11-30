#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=673 lang=cpp
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * Using dp
 */
class Solution {
 public:
  int findNumberOfLIS(vector<int> &nums) {
    int max_val = 1;
    int size = nums.size();
    vector<int> dp(size, 1);
    vector<int> count(size, 1);
    for (int i = 1; i < size; i++) {
      for (int j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          if (dp[j] + 1 > dp[i]) {
            dp[i] = dp[j] + 1;
            count[i] = count[j];
          } else if (dp[j] + 1 == dp[i]) {
            count[i] += count[j];
          }
        }
      }
      if (dp[i] > max_val) {
        max_val = dp[i];
      }
    }
    int max_count = 0;
    for (int i = 0; i < size; i++) {
      if (dp[i] == max_val) max_count += count[i];
    }
    return max_count;
  }
};
// @lc code=end
