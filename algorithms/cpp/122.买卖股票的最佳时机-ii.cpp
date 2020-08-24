#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=122 lang=cpp
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
class Solution {
 public:
  int maxProfit(vector<int>& prices) {
    int yield = 0;
    for (int i = 0; i < prices.size() - 1; i++) {
      if (prices[i + 1] > prices[i]) {
        yield += prices[i + 1] - prices[i];
      }
    }
    return yield;
  }
};
// @lc code=end
