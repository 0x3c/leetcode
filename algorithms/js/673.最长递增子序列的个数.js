/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const len = nums.length;
  /**
   * 记录切片 nums[0:i] 所能构成的最长递归子序列的长度
   * 对于每一个 i,j( 0 < i < nums.length, 0 < j < nums.length, i > j),
   * 当 nums[i] > nums[j],
   * 则 dp[i] = max(dp[j] + 1,dp[i])
   */
  const dp = Array.from({ length: len }, () => 1);

  /**
   * 记录切片 nums[0:i] 中能组成最长递归子序列的个数
   * 对于每一个 i,j( 0 < i < nums.length, 0< j < nums.length, i > j),
   * 当 nums[i] > nums[j],
   * 若 dp[j]+1 > dp[i], count[i] =count[j]
   * 若 dp[j]+1 == dp[i], count[i] += count[j]
   */
  const count = Array.from({ length: len }, () => 1);
  let max_increase_subsequence = 1; // 记录最长递增子序列的长度
  let ans = 0;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 == dp[i]) {
          count[i] += count[j];
        }
      }
    }
    max_increase_subsequence = Math.max(dp[i], max_increase_subsequence);
  }

  for (let i = 0; i < len; i++) {
    if (dp[i] === max_increase_subsequence) ans += count[i];
  }
  return ans;
};
// @lc code=end
