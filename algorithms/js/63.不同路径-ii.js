/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (31.67%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    20.4K
 * Total Submissions: 64.2K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 *
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 */
/**
 * 参考 problem 62
 * 初始行个元素中, 若存在有障碍物的元素, 该元素及之后元素的路径总是为0。
 * 若第(i,k)个元素为障碍, 该元素路径总数为0, 否则按正常元素处理。
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const idx = obstacleGrid[0].findIndex(v => v === 1);
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  // 初始化第一行个元素路径总数
  const dp = ~idx
    ? Array.from({ length: n }, (v, i) => (i < idx ? 1 : 0))
    : Array.from({ length: n }, () => 1);

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      obstacleGrid[i][j] === 1 ? (dp[j] = 0) : (dp[j] += dp[j - 1] || 0);
    }
  }
  return dp[n - 1];
};
