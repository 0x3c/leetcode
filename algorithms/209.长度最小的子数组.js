/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (39.37%)
 * Likes:    116
 * Dislikes: 0
 * Total Accepted:    13.6K
 * Total Submissions: 34.5K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 *
 * 示例:
 *
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 *
 *
 * 进阶:
 *
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 *
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let lp = 0,
    rp = 0,
    sum = 0,
    n = 0;
  while (lp < nums.length) {
    sum += nums[rp];
    if (sum >= s) {
      const n0 = rp - lp + 1;
      n = n > 0 ? Math.min(n0, n) : n0;
      sum = 0;
      rp = ++lp;
      continue;
    }
    rp++;
    if (rp > nums.length - 1) {
      sum = 0;
      rp = ++lp;
    }
  }
  return n;
};
