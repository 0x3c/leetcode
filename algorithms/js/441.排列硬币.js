/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 *
 * https://leetcode-cn.com/problems/arranging-coins/description/
 *
 * algorithms
 * Easy (39.15%)
 * Likes:    48
 * Dislikes: 0
 * Total Accepted:    15.9K
 * Total Submissions: 39.8K
 * Testcase Example:  '5'
 *
 * 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
 *
 * 给定一个数字 n，找出可形成完整阶梯行的总行数。
 *
 * n 是一个非负整数，并且在32位有符号整型的范围内。
 *
 * 示例 1:
 *
 *
 * n = 5
 *
 * 硬币可排列成以下几行:
 * ¤
 * ¤ ¤
 * ¤ ¤
 *
 * 因为第三行不完整，所以返回2.
 *
 *
 * 示例 2:
 *
 *
 * n = 8
 *
 * 硬币可排列成以下几行:
 * ¤
 * ¤ ¤
 * ¤ ¤ ¤
 * ¤ ¤
 *
 * 因为第四行不完整，所以返回3.
 *
 *
 */

// @lc code=start
/**
 * javascript 最大安全整数 Number.MAX_SAFE_INTEGER = 2**53-1, 可直接套用数学公式
 * n = 1,2,3,4,5,6,7...k = (k+1)k/2 =>  k^2+k=2n
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let pointer = Math.ceil(Math.sqrt(Number(2 * n)));
  while (pointer * pointer + pointer > 2 * n) {
    pointer--;
  }
  return pointer;
};
// @lc code=end
