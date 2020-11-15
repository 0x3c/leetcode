/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start

const isValidPos = (row, col, board) => {
  let nums = [];
  const len = board.length;
  // check curent row
  for (let i = 0; i < len; i++) {
    const n = board[row][i];
    if (n !== ".") {
      if (nums.indexOf(n) !== -1) return false;
      nums.push(n);
    }
  }
  nums = [];
  // check curent col
  for (let i = 0; i < len; i++) {
    const n = board[i][col];
    if (n !== ".") {
      if (nums.indexOf(n) !== -1) return false;
      nums.push(n);
    }
  }
  nums = [];
  // check curent small-board
  let row_from = Math.floor(row / 3) * 3,
    col_from = Math.floor(col / 3) * 3;
  for (let i = row_from; i < row_from + 3; i++) {
    for (let j = col_from; j < col_from + 3; j++) {
      const n = board[i][j];
      if (n !== ".") {
        if (nums.indexOf(n) !== -1) return false;
        nums.push(n);
      }
    }
  }

  return true;
};
/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = (board) => {
  const len = board.length;
  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      if (!isValidPos(row, col, board)) return false;
    }
  }
  return true;
};
// @lc code=end
