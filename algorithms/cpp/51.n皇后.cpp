#include <iostream>
#include <string>
#include <vector>
using namespace std;

/*
 * @lc app=leetcode.cn id=51 lang=cpp
 *
 * [51] N皇后
 */

// @lc code=start

class Solution {
 private:
  using board_type = vector<string>;
  bool is_valid(int row, int col, const board_type& checkerboard) {
    // check top
    for (int irow = row, icol = col; irow >= 0; irow--) {
      if (checkerboard[irow][icol] == 'Q') {
        return false;
      }
    }

    // check top-left
    for (int irow = row, icol = col; icol >= 0 && irow >= 0; icol--, irow--) {
      if (checkerboard[irow][icol] == 'Q') {
        return false;
      }
    }
    // check top-right
    for (int irow = row, icol = col;
         irow >= 0 && icol < checkerboard[irow].size(); irow--, icol++) {
      if (checkerboard[irow][icol] == 'Q') {
        return false;
      }
    }
    return true;
  }

 public:
  void dfs(int row, int n, board_type board, vector<board_type>& ans) {
    if (row == n) {
      ans.push_back(move(board));
      return;
    }
    for (int col = 0; col < n; col++) {
      if (is_valid(row, col, board)) {
        board[row][col] = 'Q';
        dfs(row + 1, n, board, ans);
        board[row][col] = '.';
      }
    }
  }
  vector<board_type> solveNQueens(int n) {
    vector<board_type> ans;
    vector<string> board(n, string(n, '.'));
    dfs(0, n, board, ans);
    return ans;
  }
};
// @lc code=end
