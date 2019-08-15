/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H指数
 *
 * https://leetcode-cn.com/problems/h-index/description/
 *
 * algorithms
 * Medium (35.77%)
 * Likes:    27
 * Dislikes: 0
 * Total Accepted:    3.8K
 * Total Submissions: 10.5K
 * Testcase Example:  '[3,0,6,1,5]'
 *
 * 给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。
 *
 * h 指数的定义: “h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）至多有 h
 * 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数不多于 h 次。）”
 *
 *
 *
 * 示例:
 *
 * 输入: citations = [3,0,6,1,5]
 * 输出: 3
 * 解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
 * 由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
 *
 *
 *
 * 说明: 如果 h 有多种可能的值，h 指数是其中最大的那个。
 *
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const len = citations.length;
  if (len === 1) {
    return citations[0] > 0 ? 1 : 0;
  }
  citations.sort((a, b) => b - a);
  if (citations[0] === 0) {
    return 0;
  }
  const index = citations.findIndex((a, idx) => idx + 1 > a);
  if (citations[len - 1] >= len) {
    return len;
  }
  if (index > 0) {
    return index;
  }
  return 0;
};
