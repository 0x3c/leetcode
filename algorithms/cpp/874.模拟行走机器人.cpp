#include <iostream>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;

/*
 * @lc app=leetcode.cn id=874 lang=cpp
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
class Solution {
 public:
  int robotSim(vector<int>& commands, vector<vector<int> >& obstacles) {
    int ans = 0;
    int pos_x = 0, pos_y = 0;
    int direction = 0;  // north - 0, east - 1, south - 2, west - 3.
    unordered_set<string> obstacles_set;

    for (auto pos : obstacles) {
      string s = to_string(pos[0]) + "," + to_string(pos[1]);
      obstacles_set.insert(s);
    }
    cout << "set size: " << obstacles_set.size() << endl;
    for (int i = 0; i < commands.size(); i++) {
      if (commands[i] < 0) {
        turn_to(direction, commands[i]);
      } else {
        walk_to(pos_x, pos_y, direction, commands[i], obstacles_set, ans);
      }
    }
    return ans;
  }

 private:
  void turn_to(int& direction, const int& command) {
    if (command == -1) {
      //   direction++;
      direction = (direction + 1) % 4;
    } else if (command == -2) {
      //   direction--;
      direction = (direction + 3) % 4;
    }
    // direction = (direction + 4) % 4;
  }
  void walk_to(int& pos_x, int& pos_y, const int direction, int step,
               unordered_set<string>& obstacles_set, int& ans) {
    int step_x = 0, step_y = 0;
    if (direction == 0) {
      step_y = 1;
    } else if (direction == 1) {
      step_x = 1;
    } else if (direction == 2) {
      step_y = -1;
    } else if (direction == 3) {
      step_x = -1;
    }
    while (step--) {
      if (obstacles_set.find(to_string(pos_x + step_x) + "," +
                             to_string(pos_y + step_y)) !=
          obstacles_set.end()) {
        cout << "find wall at " << pos_x << ", " << pos_y << endl;
        return;
      }
      pos_x = pos_x + step_x;
      pos_y = pos_y + step_y;
      ans = max(ans, pos_x * pos_x + pos_y * pos_y);
    }
  }
};
// @lc code=end
