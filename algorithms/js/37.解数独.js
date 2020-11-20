/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 *
 * @param {number} row
 * @param {number} col
 * @param {character[][]} board
 */
const fillExists = (row, col, board) => {
  const exists = Array.from({ length: 10 }, (_) => 0);
  for (let i = 0; i < 9; i++) {
    if (board[row][i] !== ".") exists[board[row][i]] = 1;
  }
  for (let i = 0; i < 9; i++) {
    if (board[i][col] !== ".") exists[board[i][col]] = 1;
  }
  const rowFrom = Math.floor(row / 3) * 3;
  const colFrom = Math.floor(col / 3) * 3;
  for (let i = rowFrom; i < rowFrom + 3; i++) {
    for (let j = colFrom; j < colFrom + 3; j++) {
      if (board[i][j] !== ".") exists[board[i][j]] = 1;
    }
  }
  return exists;
};
/**
 *
 * @param {character[][]} board
 * @param {number} level
 */
const dfs = (board, level) => {
  // terminator
  if (level === 81) return true;
  const row = Math.floor(level / 9);
  const col = level % 9;
  if (board[row][col] !== ".") return dfs(board, level + 1);
  // existed number
  const exists = fillExists(row, col, board);
  for (let i = 1; i < 10; i++) {
    if (!exists[i]) {
      board[row][col] = String(i);
      if (dfs(board, level + 1)) return true;
      board[row][col] = ".";
    }
  }
  // not found valid number
  return false;
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  dfs(board, 0);
};
// @lc code=end
