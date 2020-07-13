/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 *
 * https://leetcode-cn.com/problems/surface-area-of-3d-shapes/description/
 *
 * algorithms
 * Easy (52.42%)
 * Likes:    26
 * Dislikes: 0
 * Total Accepted:    3K
 * Total Submissions: 5.6K
 * Testcase Example:  '[[2]]'
 *
 * 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。
 *
 * 每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。
 *
 * 请你返回最终形体的表面积。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：[[2]]
 * 输出：10
 *
 *
 * 示例 2：
 *
 * 输入：[[1,2],[3,4]]
 * 输出：34
 *
 *
 * 示例 3：
 *
 * 输入：[[1,0],[0,2]]
 * 输出：16
 *
 *
 * 示例 4：
 *
 * 输入：[[1,1,1],[1,0,1],[1,1,1]]
 * 输出：32
 *
 *
 * 示例 5：
 *
 * 输入：[[2,2,2],[2,1,2],[2,2,2]]
 * 输出：46
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= N <= 50
 * 0 <= grid[i][j] <= 50
 *
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const rows = grid.length;
  let area = 0;
  for (let row = 0; row < rows; row++) {
    const cols = grid[row].length;
    for (let col = 0; col < cols; col++) {
      const h = grid[row][col];
      let t = h,
        b = h,
        l = h,
        r = h;
      if (grid[row - 1] !== undefined)
        t = Math.max(h - (grid[row - 1][col] || 0), 0);
      if (grid[row + 1] !== undefined)
        b = Math.max(h - (grid[row + 1][col] || 0), 0);
      if (grid[row][col - 1] !== undefined)
        l = Math.max(h - (grid[row][col - 1] || 0), 0);
      if (grid[row][col + 1] !== undefined)
        r = Math.max(h - (grid[row][col + 1] || 0), 0);

      area += grid[row][col] ? l + r + b + t + 2 : 0;
    }
  }
  return area;
};
