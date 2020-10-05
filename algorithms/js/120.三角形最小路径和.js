/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const row = triangle.length;
  const col = triangle[row - 1].length;
  const dp = Array.from({ length: row + 1 }, (_, i) =>
    Array.from({ length: col + 1 }, () => (i === 0 ? 0 : Number.MAX_VALUE))
  );
  for (let i = 1; i < row + 1; i++) {
    for (let j = 1; j < triangle[i - 1].length + 1; j++) {
      dp[i][j] =
        triangle[i - 1][j - 1] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
    }
  }
  return Math.min(...dp[row]);
};
// @lc code=end
