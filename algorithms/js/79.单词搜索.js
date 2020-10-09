/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start

const dfs = (row, col, board, i, search) => {
  // terminator
  if (
    row < 0 ||
    col < 0 ||
    row > board.length - 1 ||
    col > board[row].length - 1 ||
    board[row][col] === true ||
    i >= search.length ||
    board[row][col] !== search[i]
  ) {
    return false;
  }
  //   process current logic
  i++;
  if (search.length === i) return true;
  const ch = board[row][col];
  board[row][col] = true;

  // drill down
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let direct of directions) {
    if (dfs(row + direct[0], col + direct[1], board, i, search)) return true;
  }
  //   restore state
  board[row][col] = ch;
  return false;
};
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (word[0] === board[row][col] && dfs(row, col, board, 0, word))
        return true;
    }
  }
  return false;
};
// @lc code=end
