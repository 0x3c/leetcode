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
 * 楼层顶部为 最后一阶楼梯之后
 * dp方程: dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
class Solution_DP {
 public:
  int minCostClimbingStairs(vector<int>& cost) {
    int size = cost.size();
    vector<int> dp(size + 1, 0);
    dp[0] = 0;
    dp[1] = 0;
    for (int i = 2; i <= size; i++) {
      dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[size];
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
    int pre = 0, cur = 0;
    for (int i = 2; i <= cost.size(); i++) {
      int temp = cur;
      cur = min(cur + cost[i - 1], pre + cost[i - 2]);
      pre = temp;
    }
    return cur;
  }
};
// @lc code=end