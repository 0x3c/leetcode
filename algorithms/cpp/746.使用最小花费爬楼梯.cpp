#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=746 lang=cpp
 *
 * [746] 使用最小花费爬楼梯
 */

/**
 * using dp
 * dp[i] 为到达第 i 阶的最小花费
 * dp方程: dp[i] = min(dp[i] - 1, dp[i] - 2) + cost[i]
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
class Solution_DP {
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
// @lc code=start
/**
 * dp 优化, 只保留需要的两个状态
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */
class Solution {
 public:
  int minCostClimbingStairs(vector<int>& cost) {
    int pre = cost[0];
    int cur = cost[1];
    for (int i = 2; i < cost.size(); i++) {
      int temp = cur;
      cur = min(pre, cur) + cost[i];
      pre = temp;
    }
    return min(cur, pre);
  }
};
// @lc code=end