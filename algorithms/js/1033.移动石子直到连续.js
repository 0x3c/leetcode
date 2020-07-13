/*
 * @lc app=leetcode.cn id=1033 lang=javascript
 *
 * [1033] 移动石子直到连续
 *
 * https://leetcode-cn.com/problems/moving-stones-until-consecutive/description/
 *
 * algorithms
 * Easy (34.93%)
 * Likes:    11
 * Dislikes: 0
 * Total Accepted:    3.9K
 * Total Submissions: 10.5K
 * Testcase Example:  '1\n2\n5'
 *
 * 三枚石子放置在数轴上，位置分别为 a，b，c。
 *
 * 每一回合，我们假设这三枚石子当前分别位于位置 x, y, z 且 x < y < z。从位置 x 或者是位置 z
 * 拿起一枚石子，并将该石子移动到某一整数位置 k 处，其中 x < k < z 且 k != y。
 *
 * 当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。
 *
 * 要使游戏结束，你可以执行的最小和最大移动次数分别是多少？ 以长度为 2 的数组形式返回答案：answer = [minimum_moves,
 * maximum_moves]
 *
 *
 *
 * 示例 1：
 *
 * 输入：a = 1, b = 2, c = 5
 * 输出：[1, 2]
 * 解释：将石子从 5 移动到 4 再移动到 3，或者我们可以直接将石子移动到 3。
 *
 *
 * 示例 2：
 *
 * 输入：a = 4, b = 3, c = 2
 * 输出：[0, 0]
 * 解释：我们无法进行任何移动。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= a <= 100
 * 1 <= b <= 100
 * 1 <= c <= 100
 * a != b, b != c, c != a
 *
 *
 */

// @lc code=start
/**
 * max 为一步一格, max = c - a - 2
 * min 分类讨论,
 * min 为0: 连续数字, c-a=2
 * min 为1: 有一对数字连续(b-a=1/c-b=1), 或有一对数字中间仅空一个(b-a=2/c-b=2)
 * 否则 min 为2.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  [a, b, c] = [a, b, c].sort((a, b) => a - b);

  let max = c - a - 2;
  let min = 2;
  if (c - a === 2) {
    min = 0;
  } else if (c - b === 2 || b - a === 2) {
    min = 1;
  } else if (c - b === 1 || b - a === 1) {
    min = 1;
  }
  return [min, max];
};
// @lc code=end
