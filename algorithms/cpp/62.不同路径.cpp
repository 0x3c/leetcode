#include <vector>
using std::vector;
/*
 * @lc app=leetcode.cn id=62 lang=cpp
 *
 * [62] 不同路径
 */

/**
 * Using dfs
 * 时间复杂度: O(2^(m+n))
 */
class Solution_DP {
 private:
  void dfs(int x, int y, int m, int n, int& ans) {
    //   terminator
    if (x > m || y > n) {
      return;
    }
    if (x == m && y == n) {
      ans++;
      return;
    }
    // process current logic
    dfs(x + 1, y, m, n, ans);
    dfs(x, y + 1, m, n, ans);
  }

 public:
  int uniquePaths(int m, int n) {
    int ans = 0;
    dfs(0, 0, m, n, ans);
    return ans;
  }
};

// @lc code=start
/**
 * Using dp
 * dp[i][j]为到达第i行,第j列的路径数量
 * 初始状态为起始行和起始列路径数为1,
 * 即  当 0<i<m 时, dp[0][i]=1; 当 0<j<n 时, dp[n][0]=1.
 * 对于 0<i<m, 0<j<n, 其状态dp方程为: dp[i][j]=dp[i-1][j]+dp[i][j-1]
 * 时间复杂度: O(m*n)
 */
class Solution {
 public:
  int uniquePaths(int m, int n) {
    vector<vector<int> > dp(n, vector<int>(m, 0));
    for (int i = 0; i < m; i++) {
      dp[0][i] = 1;
    }
    for (int i = 0; i < n; i++) {
      dp[i][0] = 1;
    }
    for (int i = 1; i < n; i++) {
      for (int j = 1; j < m; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    return dp[n - 1][m - 1];
  }
};
// @lc code=end
