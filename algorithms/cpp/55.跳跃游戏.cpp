#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=55 lang=cpp
 *
 * [55] 跳跃游戏
 */

// @lc code=start
class Solution {
 public:
  bool canJump(vector<int>& nums) {
    int last = nums.size() - 1;
    while (last) {
      int can_arrived = false;
      for (int i = last - 1; i > -1; i--) {
        if (i + nums[i] >= last) {
          last = i;
          can_arrived = true;
          break;
        }
      }
      if (!can_arrived) return false;
    }
    return true;
  }
};
// @lc code=end
