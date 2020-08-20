#include <iostream>
#include <vector>
using namespace std;

/*
 * @lc app=leetcode.cn id=529 lang=cpp
 *
 * [529] 扫雷游戏
 */

// @lc code=start
class Solution {
 private:
  using return_type = vector<vector<char> >;
  int get_landmine_num(int row, int col, return_type& board) {
    int count = 0;
    if (row - 1 >= 0 && board[row - 1][col] == 'M') {
      count++;
    }
    if (row + 1 < board.size() && board[row + 1][col] == 'M') {
      count++;
    }
    if (col + 1 < board[row].size() && board[row][col + 1] == 'M') {
      count++;
    }
    if (col - 1 >= 0 && board[row][col - 1] == 'M') {
      count++;
    }
    if (row - 1 >= 0 && col - 1 >= 0 && board[row - 1][col - 1] == 'M') {
      count++;
    }
    if (row + 1 < board.size() && col + 1 < board[row + 1].size() &&
        board[row + 1][col + 1] == 'M') {
      count++;
    }
    if (row - 1 >= 0 && col + 1 < board[row - 1].size() &&
        board[row - 1][col + 1] == 'M') {
      count++;
    }
    if (row + 1 < board.size() && col - 1 >= 0 &&
        board[row + 1][col - 1] == 'M') {
      count++;
    }
    return count;
  }

 public:
  void dfs(int row, int col, return_type& board) {
    if (row < 0 || col < 0 || row >= board.size() || col >= board[row].size()) {
      return;
    }
    if (board[row][col] == 'M') {
      board[row][col] = 'X';
      return;
    }
    if (board[row][col] != 'E') {
      return;
    }
    // 相邻地雷数
    int count = get_landmine_num(row, col, board);
    if (count > 0) {
      // 修改为数字或 B(无数字)
      board[row][col] = (char)(count + 48);

    } else {
      // B 则递归周围
      board[row][col] = 'B';
      dfs(row - 1, col, board);
      dfs(row + 1, col, board);
      dfs(row, col - 1, board);
      dfs(row, col + 1, board);
      dfs(row - 1, col + 1, board);
      dfs(row - 1, col - 1, board);
      dfs(row + 1, col + 1, board);
      dfs(row + 1, col - 1, board);
    }
  }
  return_type updateBoard(return_type& board, vector<int>& click) {
    dfs(click[0], click[1], board);
    return board;
  }
};
// @lc code=end
