#include <iostream>
#include <queue>
#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=1091 lang=cpp
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
class Solution {
 public:
  int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
    int len = grid.size();
    if (grid[0][0] == 1 || grid[len - 1][len - 1] == 1) return -1;
    if (len <= 2) return len;

    vector<vector<int>> direction{{0, 1},   {0, -1}, {1, 0},  {-1, 0},
                                  {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};

    queue<pair<int, int>> main_queue;
    main_queue.emplace(0, 0);
    int dist = 0;
    while (not main_queue.empty()) {
      dist++;
      int task_size = main_queue.size();

      while (task_size--) {
        auto [dx, dy] = main_queue.front();
        main_queue.pop();
        if (dx == len - 1 && dy == len - 1) return dist;
        for (const auto& direct : direction) {
          int x = dx + direct[0];
          int y = dy + direct[1];
          if (x < 0 || x > len - 1 || y < 0 || y > len - 1 || grid[x][y] == 1)
            continue;
          grid[x][y] = 1;
          main_queue.emplace(x, y);
        }
      }
    }
    return -1;
  }
};
// @lc code=end
