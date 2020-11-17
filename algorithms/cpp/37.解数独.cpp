#include <iostream>
#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=37 lang=cpp
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (55.98%)
 * Likes:    687
 * Dislikes: 0
 * Total Accepted:    61.5K
 * Total Submissions: 92.3K
 * Testcase Example:
 * '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过填充空格来解决数独问题。
 *
 * 一个数独的解法需遵循如下规则：
 *
 *
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 *
 * 空白格用 '.' 表示。
 *
 *
 *
 * 一个数独。
 *
 *
 *
 * 答案被标成红色。
 *
 * 提示：
 *
 *
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 *
 *
 */

// @lc code=start
class Solution {
 private:
  /*
   * 获取当前位置不能填充的棋子
   */
  void get_exist(int row, int col, const vector<vector<char>>& board,
                 int exist[10]) {
    for (int i = 0; i < 9; i++) {
      if (board[row][i] == '.') continue;
      int idx = board[row][i] - '0';
      exist[idx] = true;
    }

    for (int j = 0; j < 9; j++) {  // 判断列里是否重复
      if (board[j][col] == '.') continue;
      int idx = board[j][col] - '0';
      exist[idx] = true;
    }

    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;
    for (int i = startRow; i < startRow + 3; i++) {  // 判断9方格里是否重复
      for (int j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == '.') continue;
        int idx = board[i][j] - '0';
        exist[idx] = true;
      }
    }
  }
  /**
   * 共81个格子, 按格子顺序递归
   */
  bool dfs(vector<vector<char>>& board, int level) {
    // terminator
    if (level == 81) return true;
    int row = level / 9;
    int col = level % 9;
    // 当前格子已填充则递归下一层
    if (board[row][col] != '.') return dfs(board, level + 1);
    int existed[10] = {0};
    get_exist(row, col, board, existed);
    for (char ch = 1; ch < 10; ch++) {
      if (existed[ch] == 1) continue;  // 数字已存在, 跳过当前数字
      board[row][col] = ch + '0';
      if (dfs(board, level + 1)) return true;
      board[row][col] = '.';  // restore state
    }
    return false;
  }

 public:
  void solveSudoku(vector<vector<char>>& board) { dfs(board, 0); }
};
// @lc code=end
