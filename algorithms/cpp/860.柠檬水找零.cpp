#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=860 lang=cpp
 *
 * [860] 柠檬水找零
 */

// @lc code=start
class Solution {
 public:
  bool lemonadeChange(vector<int>& bills) {
    int five = 0, ten = 0;
    for (int i = 0; i < bills.size(); i++) {
      if (bills[i] == 5) {
        five++;
      } else if (bills[i] == 10) {
        ten++;
        five--;
      } else {
        if (ten > 0) {
          ten--;
          five--;
        } else {
          five -= 3;
        }
      }
      if (five < 0) {
        return false;
      }
    }
    return true;
  }
};
// @lc code=end
