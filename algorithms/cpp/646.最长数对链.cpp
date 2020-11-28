#include <iostream>
#include <vector>
using namespace std;

/*
 * @lc app=leetcode.cn id=646 lang=cpp
 *
 * [646] 最长数对链
 */

// @lc code=start
bool sortter(const vector<int>& a, const vector<int>& b) {
  if (a[0] != b[0])
    return a[0] < b[0];
  else
    return a[1] < b[1];
}
/*
 * Using dp
 * dp[i]: pairs[i]结尾的最长链长度
 *  dp方程:
 * 当 j<i 时, 若 pairs[i]能放在pairs[j]之后, 即 pairs[i][0]>pairs[j][1]
 * 则 dp[i]=max(dp[i],dp[j]+1).
 * 单个元素最小可组成长度为1的链, 即dp数组中个元素初始状态为1
 */

class Solution {
 public:
  int findLongestChain(vector<vector<int> >& pairs) {
    sort(pairs.begin(), pairs.end(), sortter);
    int size = pairs.size(), ans = 0;
    ;
    vector<int> dp(size, 1);
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < i; j++) {
        if (pairs[j][1] < pairs[i][0]) {
          dp[i] = max(dp[i], dp[j] + 1);
        }
      }
      ans = max(ans, dp[i]);
    }
    return ans;
  }
};
// @lc code=end
