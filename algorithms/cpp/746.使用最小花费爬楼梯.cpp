#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=746 lang=cpp
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * using dp
 * dp[i] 为到达第 i 阶的最小花费
 * dp方程: dp[i] = min(dp[i] - 1, dp[i] - 2) + cost[i]
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
class Solution {
 public:
  int minCostClimbingStairs(vector<int>& cost) {
    int size = cost.size();
    vector<int> dp(size, 0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (int i = 2; i < size; i++) {
      dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return min(dp[size - 1], dp[size - 2]);
  }
};
// @lc code=end