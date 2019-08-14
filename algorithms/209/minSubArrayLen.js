/**
 * 209. Minimum Size Subarray Sum
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 */

/**
 * @description 从最左侧开始, 找到最短距离的集合, 记录距离, 依次向右滑动, 保存最短距离。
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(s, nums) {
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
