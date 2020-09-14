#include <iostream>
#include <string>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=79 lang=cpp
 *
 * [79] 单词搜索
 */

// @lc code=start
class Solution {
 private:
  bool dfs(int level, const string& word, int row, int col,
           vector<vector<char> >& board) {
    //    terminator
    if (row < 0 || col < 0 || row > board.size() - 1 ||
        col > board[row].size() - 1)
      return false;
    if (board[row][col] != word[level]) return false;
    if (level == word.size() - 1) return true;
    // process current logic
    char ch = board[row][col];
    board[row][col] = 0;
    // drill down
    if (dfs(level + 1, word, row + 1, col, board) ||
        dfs(level + 1, word, row - 1, col, board) ||
        dfs(level + 1, word, row, col + 1, board) ||
        dfs(level + 1, word, row, col - 1, board)) {
      return true;
    }
    // restore status
    board[row][col] = ch;
    return false;
  }

 public:
  bool exist(vector<vector<char> >& board, string word) {
    for (int i = 0; i < board.size(); i++) {
      for (int j = 0; j < board[i].size(); j++) {
        if (dfs(0, word, i, j, board)) return true;
      }
    }
    return false;
  }
};
// @lc code=end
