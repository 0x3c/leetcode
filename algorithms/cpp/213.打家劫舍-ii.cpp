#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=213 lang=cpp
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
class Solution {
 public:
  int rob(vector<int>& nums) {
    int len = nums.size();
    if (!len) return 0;
    if (len == 1) return nums[0];
    vector<int> dp1(len + 1, 0);  // 不偷第一家
    vector<int> dp2(len + 1, 0);  // 偷第一家
    dp2[1] = nums[0];
    for (int i = 2; i < len + 1; i++) {
      dp1[i] = max(dp1[i - 1], dp1[i - 2] + nums[i - 1]);
      dp2[i] = max(dp2[i - 1], dp2[i - 2] + nums[i - 1]);
    }
    return max(dp1[len], dp2[len - 1]);
  }
};
// @lc code=end
