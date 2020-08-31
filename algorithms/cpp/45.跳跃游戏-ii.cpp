#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=45 lang=cpp
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
class Solution {
 public:
  int jump(vector<int>& nums) {
    int steps = 0, max_pos = 0, end = 0;
    for (int i = 0; i < nums.size() - 1; i++) {
      max_pos = max(max_pos, i + nums[i]);
      if (i == end) {
        end = max_pos;
        steps++;
      }
    }
    return steps;
  }
};
// @lc code=end
