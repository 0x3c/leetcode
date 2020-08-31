#include <iostream>
#include <vector>

using namespace std;

/*
 * @lc app=leetcode.cn id=841 lang=cpp
 *
 * [841] 钥匙和房间
 */

// @lc code=start
class Solution {
 private:
  vector<int> visited;
  int num = 0;
  void dfs(const vector<vector<int> >& rooms, int cur_room,
           vector<int>& visited) {
    if (visited[cur_room]) {
      return;
    }
    visited[cur_room] = 1;
    num++;
    auto keys = rooms[cur_room];
    for (auto key : keys) {
      dfs(rooms, key, visited);
    }
  }

 public:
  bool canVisitAllRooms(vector<vector<int> >& rooms) {
    visited.resize(rooms.size());
    dfs(rooms, 0, visited);
    return num == rooms.size();
  }
};
// @lc code=end
