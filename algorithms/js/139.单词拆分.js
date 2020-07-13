/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 *
 * https://leetcode-cn.com/problems/word-break/description/
 *
 * algorithms
 * Medium (42.78%)
 * Likes:    198
 * Dislikes: 0
 * Total Accepted:    19.3K
 * Total Submissions: 45.1K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 *
 * 说明：
 *
 *
 * 拆分时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 *
 *
 * 示例 1：
 *
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 *
 *
 * 示例 2：
 *
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 * 注意你可以重复使用字典中的单词。
 *
 *
 * 示例 3：
 *
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 *
 *
 */
/**
 * 建立数组dp:boolean[], dp[i]表示s.substring(0,i) 能否由字典里的单词组成。
 * 判断前i个字符是否能拆分, 前i-word.length 个字符必须能拆分
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (!s.length || !wordDict.length) return false;
  const dp = Array(s.length + 1);
  dp[0] = true;
  for (let i = 1; i < s.length + 1; i++) {
    // 计算前i个字符能否拆分
    for (let word of wordDict) {
      if (dp[i]) break; // 能拆分则不许要继续处理
      if (!dp[i - word.length] || i - word.length < 0) continue; // 第i-word.length必须能拆分
      if (s.substr(i - word.length, word.length) === word) dp[i] = true; // 可以匹配则置dp[i] -> true
    }
  }
  return dp[s.length] || false;
};
