/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (45.29%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    22.6K
 * Total Submissions: 49.9K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给定一个由 '1'（陆地）和
 * '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 *
 * 示例 1:
 *
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 *
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 *
 * 输出: 3
 *
 *
 */

// @lc code=start
function dfs(x, y, grid) {
  if (
    x < 0 ||
    y < 0 ||
    x >= grid.length ||
    y >= grid[x].length ||
    grid[x][y] === "0"
  )
    return;
  grid[x][y] = "0";
  dfs(x, y - 1, grid);
  dfs(x, y + 1, grid);
  dfs(x - 1, y, grid);
  dfs(x + 1, y, grid);
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j, grid);
        num++;
      }
    }
  }
  return num;
};
// @lc code=end
