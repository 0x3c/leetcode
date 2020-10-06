#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=322 lang=cpp
 *
 * [322] 零钱兑换
 */

// @lc code=start
class Solution {
 public:
  /**
   * 状态数组: opt[i] 是 凑成总金额为 i 所需的最少硬币个数
   * 状态转移方程: dp[i]=min(dp[i - k]) - [k in coins]
   */
  int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i < amount + 1; i++) {
      for (auto coin : coins) {
        if (i >= coin) dp[i] = min(dp[i], dp[i - coin] + 1);
      }
    }
    return dp[amount] > amount ? -1 : dp[amount];
  }
};
// @lc code=end
