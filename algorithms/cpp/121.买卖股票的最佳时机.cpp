#include <vector>
using std::max;
using std::vector;
/*
 * @lc app=leetcode.cn id=121 lang=cpp
 *
 * [121] 买卖股票的最佳时机
 */

/**
 * dp[i] 为 prices[0:i] 只做一次交易所能获得的最大收益
 * dp 方程: 对于 0<=j<i<n
 *         若 prices[i]>=prices[j]
 *         则 dp[i]=max(dp[i], dp[j]+prices[i-prices[j]])
 * 时间复杂度: O(n^2), 双循环
 */
class Solution_DP {
 public:
  int maxProfit(vector<int>& prices) {
    int size = prices.size(), ans = 0;
    vector<int> dp(size, 0);
    for (int i = 1; i < prices.size(); i++) {
      for (int j = 0; j < i; j++) {
        if (prices[i] >= prices[j]) {
          dp[i] = max(dp[j] + prices[i] - prices[j], dp[i]);
        }
      }
      ans = max(ans, dp[i]);
    }
    return ans;
  }
};

// @lc code=start
/**
 * 维护一个最小值, 和最大值, 当前值小于最小值时, 重置两个值,
 * 遍历期间若当前收益大于历史收益, 则更新
 * 时间复杂度: O(n)
 */
class Solution {
 public:
  int maxProfit(vector<int>& prices) {
    int size = prices.size();
    if (size == 0) return 0;
    int ans = 0, min_val = prices[0], max_val = prices[0];
    for (int i = 1; i < prices.size(); i++) {
      if (prices[i] < min_val) {
        min_val = prices[i];
        max_val = prices[i];
      } else {
        max_val = prices[i];
      }
      ans = max(ans, max_val - min_val);
    }
    return ans;
  }
};
// @lc code=end
