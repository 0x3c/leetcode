#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=657 lang=cpp
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
class Solution {
 private:
  unordered_map<char, int> hash{
      {'U', 1}, {'D', -1}, {'L', 10000}, {'R', -10000}};

 public:
  bool judgeCircle(string moves) {
    int sum = 0;
    for (auto order : moves) {
      sum += hash[order];
    }
    return sum == 0;
  }
};
// @lc code=end
