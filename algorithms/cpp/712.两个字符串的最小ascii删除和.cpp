#include <string>
#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=712 lang=cpp
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * using dp
 * dp[i][j] 表示 s1[i:] 与 s2[j:] 的最小 ascii 删除和
 * 当 s1[i]==s2[j] 时,
 * dp[i][j]=dp[i+1][j+1]
 * 否则 dp[i][j]=max(dp[i+1][j]+s1[i],dp[i][j+1]+s2[j])
 *
 * 时间复杂度: O(m*n)
 */
class Solution {
 public:
  int minimumDeleteSum(string s1, string s2) {
    int len1 = s1.size(), len2 = s2.size();
    vector<vector<int> > dp(len1 + 1, vector<int>(len2 + 1, 0));
    //  初始化
    for (int i = len1 - 1; i > -1; i--) {
      dp[i][len2] = dp[i + 1][len2] + s1[i];
    }
    for (int i = len2 - 1; i > -1; i--) {
      dp[len1][i] = dp[len1][i + 1] + s2[i];
    }

    for (int i = len1 - 1; i > -1; i--) {
      for (int j = len2 - 1; j > -1; j--) {
        if (s1[i] == s2[j]) {
          dp[i][j] = dp[i + 1][j + 1];
        } else {
          dp[i][j] = min(dp[i][j + 1] + s2[j], dp[i + 1][j] + s1[i]);
        }
      }
    }
    return dp[0][0];
  }
};
// @lc code=end
