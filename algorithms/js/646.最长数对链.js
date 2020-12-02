/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((num1, num2) =>
    num1[0] !== num2[0] ? num1[0] - num2[0] : num1[1] - num2[1]
  );
  const len = pairs.length;
  const dp = Array.from({ length: len }, () => 1);
  let ans = 0;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};
// @lc code=end
