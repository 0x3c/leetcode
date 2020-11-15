#include <iostream>
#include <string>
#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=51 lang=cpp
 *
 * [51] N皇后
 * 皇后能攻击已当前位置为原点的 0°, 45°, 90°, 135° 的直线上的旗子.
 */

// @lc code=start
class Solution {
 private:
  bool isValid(const int& row, const int& col, const vector<string>& board) {
    // top
    for (int i = row - 1; i > -1; i--) {
      if (board[i][col] == 'Q') return false;
    }

    // top-left
    for (int i = row - 1, j = col - 1; i > -1 && j > -1; i--, j--) {
      if (board[i][j] == 'Q') return false;
    }

    // top-right
    for (int i = row - 1, j = col + 1; i > -1 && j < board[i].size();
         i--, j++) {
      if (board[i][j] == 'Q') return false;
    }

    return true;
  }
  void dfs(int row, int n, vector<string>& board,
           vector<vector<string> >& ans) {
    //    terminator
    if (row == n) {
      ans.push_back(board);
      return;
    }

    // process current logic
    // ...

    for (int col = 0; col < n; col++) {
      if (isValid(row, col, board)) {
        // drill down
        board[row][col] = 'Q';
        dfs(row + 1, n, board, ans);
        // restore state
        board[row][col] = '.';
      }
    }
  }

 public:
  vector<vector<string> > solveNQueens(int n) {
    vector<vector<string> > ans;
    // generate board
    vector<string> board(n, string(n, '.'));
    dfs(0, n, board, ans);
    return ans;
  }
};
// @lc code=end
