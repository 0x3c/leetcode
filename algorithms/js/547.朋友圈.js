/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @param {number[]} visited
 * @param {number} i
 */
function dfs(M, visited, i) {
  for (let j = 0; j < M.length; j++) {
    if (M[i][j] && !visited[j]) {
      visited[j] = 1;
      dfs(M, visited, j);
    }
  }
}
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const visited = Array.from({ length: M.length }, (_) => 0);
  let count = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      count++;
      dfs(M, visited, i);
    }
  }
  return count;
};
// @lc code=end
