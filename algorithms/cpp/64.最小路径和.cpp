#include <iostream>
#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=64 lang=cpp
 *
 * [64] 最小路径和
 */

// @lc code=start
class Solution {
 public:
  int minPathSum(vector<vector<int> >& grid) {
    int size_row = grid.size();
    int size_col = grid[0].size();
    vector<vector<int> > dp(size_row + 1, vector<int>(size_col + 1, 0));
    for (int i = 1; i <= size_col; i++) {
      dp[0][i] = INT_MAX;
    }
    for (int i = 1; i <= size_row; i++) {
      dp[i][0] = INT_MAX;
    }
    for (int row = 1; row <= size_row; row++) {
      for (int col = 1; col <= size_col; col++) {
        if (row == 1 && col == 1) {
          dp[row][col] = grid[0][0];
        } else
          dp[row][col] =
              min(dp[row - 1][col], dp[row][col - 1]) + grid[row - 1][col - 1];
      }
    }
    return dp[size_row][size_col];
  }
};
// @lc code=end
