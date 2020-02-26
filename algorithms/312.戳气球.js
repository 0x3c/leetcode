/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 *
 * https://leetcode-cn.com/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (55.66%)
 * Likes:    202
 * Dislikes: 0
 * Total Accepted:    7.7K
 * Total Submissions: 13.3K
 * Testcase Example:  '[3,1,5,8]'
 *
 * 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
 *
 * 现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的
 * left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。
 *
 * 求所能获得硬币的最大数量。
 *
 * 说明:
 *
 *
 * 你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 *
 *
 * 示例:
 *
 * 输入: [3,1,5,8]
 * 输出: 167
 * 解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 *
 *
 */

/**
 * 回溯法, n 过大会超时
 * @param {number[]} coins
 * @param {number} cur
 * @param {Object} max
 */
function backtrack(coins, cur, max) {
  if (!coins.length) {
    return;
  }
  for (let i = 0; i < coins.length; i++) {
    let sum = cur;
    let nums = [...coins];
    let left = coins[i - 1];
    let right = coins[i + 1];
    if (i === 0) {
      left = 1;
    }
    if (i === coins.length - 1) {
      right = 1;
    }
    sum = cur + left * right * coins[i];
    max.val = Math.max(sum, max.val);
    nums.splice(i, 1);
    backtrack(nums, sum, max);
  }
}
// @lc code=start
/**
 * dp
 * @param {number[]} coins
 * @returns {number}
 */
function dps(coins) {
  const copys = [1, ...coins, 1];
  const len = copys.length;
  const dp = Array.from({ length: len }, () => Array(len).fill(0));
  // k∈[i,j]
  for (let space = 1; space < len; space++) {
    for (let i = 0; i + space < len; i++) {
      for (let j = i + 1; j < i + space; j++) {
        dp[i][i + space] = Math.max(
          dp[i][i + space],
          dp[i][j] + dp[j][i + space] + copys[i] * copys[j] * copys[i + space]
        );
      }
    }
  }
  return dp[0][len - 1];
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  const dp = dps(nums);
  return dp;
};
// @lc code=end
