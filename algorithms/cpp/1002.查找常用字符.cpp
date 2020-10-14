#include <iostream>
#include <string>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=1002 lang=cpp
 *
 * [1002] 查找常用字符
 */

// @lc code=start
class Solution {
 public:
  vector<string> commonChars(vector<string>& A) {
    vector<string> ans;
    if (A.empty()) return ans;
    vector<int> total_freq(26, INT_MAX);
    vector<int> cur_freq(26);
    for (auto word : A) {
      fill(cur_freq.begin(), cur_freq.end(), 0);

      for (auto ch : word) {
        ++cur_freq[ch - 'a'];
      }
      for (int i = 0; i < 26; i++) {
        total_freq[i] = min(total_freq[i], cur_freq[i]);
      }
    }
    for (int i = 0; i < 26; i++) {
      while (total_freq[i]--) {
        ans.push_back(string(1, i + 'a'));
      }
    }
    return ans;
  }
};
// @lc code=end
