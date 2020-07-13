/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 *
 * https://leetcode-cn.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (48.83%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    5.4K
 * Total Submissions: 11K
 * Testcase Example:  '0'
 *
 * 二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。
 *
 * 每个 LED 代表一个 0 或 1，最低位在右侧。
 *
 *
 *
 * 例如，上面的二进制手表读取 “3:25”。
 *
 * 给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
 *
 * 案例:
 *
 *
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16",
 * "0:32"]
 *
 *
 *
 * 注意事项:
 *
 *
 * 输出的顺序没有要求。
 * 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
 * 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
 *
 *
 */
/**
 *
 * @param {number} index 当前已处理的亮灯数量
 * @param {number} t 需亮灯数量
 * @param {number} sum 当前分支的总时间数(单位 min)
 * @param {number[]} nums 每盏灯代表的值的列表
 * @param {number[][]} list 所有组合情况的列表
 * @param {boolean[]} used nums 中各元素是否使用的列表
 */
function backtrack(index, t, sum, nums, list, used) {
  if (used[2] && used[3] && used[4] && used[5]) return; // 时不能>11
  if (used[8] && used[9]) return; // 分不能>59
  if (t === index) return list.push(sum);
  for (let i = used.lastIndexOf(true) + 1; i < nums.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    backtrack(index + 1, t, sum + nums[i], nums, list, used);
    used[i] = false;
  }
}
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const results = [],
    nums = [1, 2, 4, 8, 16, 32, 1 * 60, 2 * 60, 4 * 60, 8 * 60],
    used = nums.map(() => false);
  backtrack(0, num, 0, nums, results, used);
  /**
   *
   * @param {number} n  数字
   */
  const convert2time = n =>
    `${Math.floor(n / 60) % 24}:${(n % 60).toString().padStart(2, 0)}`;
  return results.map(convert2time);
};
