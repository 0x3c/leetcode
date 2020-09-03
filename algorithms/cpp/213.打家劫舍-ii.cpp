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
 private:
  vector<int> dp1;  // 不偷第一家
  vector<int> dp2;  // 偷第一家

 public:
  int rob(vector<int>& nums) {
    int size = nums.size();
    if (size == 0) return 0;
    if (size == 1) return nums[0];

    dp1.resize(size + 1);
    dp2.resize(size + 1);
    dp1[0] = 0;
    dp1[1] = 0;
    dp2[0] = 0;
    dp2[1] = nums[0];
    for (int i = 1; i < size; i++) {
      dp1[i + 1] = max(dp1[i], dp1[i - 1] + nums[i]);
      dp2[i + 1] = max(dp2[i], dp2[i - 1] + nums[i]);
    }
    return max(dp1.back(), dp2[size - 1]);
  }
};
// @lc code=end
