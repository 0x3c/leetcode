/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 *
 */

/**
 * 第(i,j)个元素的路径总数等于第(i-1,j)和第(i,j-1)元素的路径总数之和。
 * 终点元素路径总数为1。
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array.from({ length: m }, () => 1);
  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[j] += dp[j + 1] || 0;
    }
  }
  return dp[0];
};
