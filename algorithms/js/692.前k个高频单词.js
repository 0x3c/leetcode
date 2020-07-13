/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 *
 * https://leetcode-cn.com/problems/top-k-frequent-words/description/
 *
 * algorithms
 * Medium (42.88%)
 * Likes:    68
 * Dislikes: 0
 * Total Accepted:    7.6K
 * Total Submissions: 15.5K
 * Testcase Example:  '["i", "love", "leetcode", "i", "love", "coding"]\n2'
 *
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 *
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 *
 * 示例 1：
 *
 *
 * 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * 输出: ["i", "love"]
 * 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
 * ⁠   注意，按字母顺序 "i" 在 "love" 之前。
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
 * k = 4
 * 输出: ["the", "is", "sunny", "day"]
 * 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
 * ⁠   出现次数依次为 4, 3, 2 和 1 次。
 *
 *
 *
 *
 * 注意：
 *
 *
 * 假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
 * 输入的单词均由小写字母组成。
 *
 *
 *
 *
 * 扩展练习：
 *
 *
 * 尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
 *
 *
 */

// @lc code=start

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
function compareStr(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (!str1[i]) return -1;
    if (!str2[i]) return 1;
    if (str1.charCodeAt(i) - str2.charCodeAt(i) !== 0)
      return str1.charCodeAt(i) - str2.charCodeAt(i);
  }
  return 0;
}

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const hash = {};
  for (let word of words) {
    hash[word] = hash[word] ? hash[word] + 1 : 1;
  }
  const sortedWords = Object.entries(hash).sort(([k1, v1], [k2, v2]) => {
    if (v2 - v1 !== 0) return v2 - v1;
    return compareStr(k1, k2);
  });
  const results = [];
  while (k--) {
    results.push(sortedWords.shift()[0]);
  }
  return results;
};
// @lc code=end
