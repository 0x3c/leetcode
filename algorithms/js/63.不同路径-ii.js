/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

/**
 * bottom up
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  if (obstacleGrid[row - 1][col - 1] || obstacleGrid[0][0]) return 0;
  const dp = Array.from({ length: col }, () => 1);

  for (let i = row - 1; i > -1; i--) {
    for (let j = col - 1; j > -1; j--) {
      if (i === row - 1)
        dp[j] = obstacleGrid[i][j] == 0 && dp[j + 1] !== 0 ? 1 : 0;
      else dp[j] = obstacleGrid[i][j] == 1 ? 0 : dp[j] + (dp[j + 1] || 0);
    }
  }
  return dp[0];
};

// @lc code=start
/**
 * up bottom
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  if (obstacleGrid[row - 1][col - 1] === 1) return 0;
  const dp = Array.from({ length: col }, () => 0);
  dp[0] = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (obstacleGrid[i][j] === 1) dp[j] = 0;
      else dp[j] += dp[j - 1] || 0;
    }
  }
  return dp[col - 1];
};
