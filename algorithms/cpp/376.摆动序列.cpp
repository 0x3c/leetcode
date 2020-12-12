#include <vector>
using std::vector;
/*
 * @lc app=leetcode.cn id=376 lang=cpp
 *
 * [376] 摆动序列
 */

/**
 * Using DP
 * 维护一个上升摇摆序列 up[i] 和一个下降摇摆序列 down[i]
 * up[i] 为已 nums[i]为结尾所能组成的最长上升摇摆子序列, down 同上
 * nums 最长摇摆序列为 max(up[nums.size()], down[nums.size()])
 * dp方程为:
 * up[i]:
 * 当 nums[i]>nums[i-1], up[i]=max(up[i-1], down[i-1]+1)
 * 当 nums[i]==nums[i-1], up[i]=up[i-1]
 * down[i] 同上
 * 当 nums[i]<nums[i-1], down[i]=max(down[i-1], up[i-1]+1)
 * 当 nums[i]==nums[i-1], down[i]=down[i-1]
 *
 * 时间复杂度: O(n), 一次遍历即可,
 * 空间复杂度: O(2n)
 */
class Solution_DP {
 public:
  int wiggleMaxLength(vector<int>& nums) {
    int len = nums.size();
    if (len < 2) return len;
    vector<int> up(len, 1);
    vector<int> down(len, 1);
    for (int i = 1; i < len; i++) {
      if (nums[i] > nums[i - 1]) {
        up[i] = std::max(up[i - 1], down[i - 1] + 1);
      } else if (nums[i] < nums[i - 1]) {
        down[i] = std::max(down[i - 1], up[i - 1] + 1);
      } else {
        up[i] = up[i - 1];
        down[i] = down[i - 1];
      }
    }
    return std::max(up[len - 1], down[len - 1]);
  }
};

// @lc code=start
/**
 * 对 dp 的空间优化
 *
 * 时间复杂度: O(n), 一次遍历即可,
 * 空间复杂度: O(1)
 */
class Solution {
 public:
  int wiggleMaxLength(vector<int>& nums) {
    int len = nums.size();
    if (len < 2) return len;
    int up = 1, down = 1;
    for (int i = 1; i < len; i++) {
      if (nums[i] > nums[i - 1]) {
        up = std::max(up, down + 1);
      } else if (nums[i] < nums[i - 1]) {
        down = std::max(down, up + 1);
      }
    }
    return std::max(up, down);
  };
};
// @lc code=end
