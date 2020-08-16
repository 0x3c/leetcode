/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
function isValid(x, y, nums) {
  // left
  for (let i = x; i > -1; i--) {
    if (nums[i][y] === "Q") return false;
  }
  // top
  for (let i = y; i > -1; i--) {
    if (nums[x][i] === "Q") return false;
  }
  // top-left
  for (let i = x, j = y; i > -1 && j > -1; i--, j--) {
    if (nums[i][j] === "Q") return false;
  }
  // top-right
  for (let i = x, j = y; i > -1 && j < nums.length; i--, j++) {
    if (nums[i][j] === "Q") return false;
  }
  return true;
}
/**
 * @param {number} row
 * @param {number} n
 * @param {string[]} curAns
 * @param {string[][]} ans
 */
function dfs(row, n, curAns, ans) {
  if (row == n) {
    ans.push(curAns.map((charArr) => charArr.join("")));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (isValid(row, i, curAns)) {
      curAns[row][i] = "Q";
      dfs(row + 1, n, [...curAns], ans);
      curAns[row][i] = ".";
    }
  }
}
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const ans = [];
  if (n === 0) return ans;
  const tmp = Array.from({ length: n }, () => "".padStart(n, ".").split(""));
  dfs(0, n, tmp, ans);
  return ans;
};
// @lc code=end
