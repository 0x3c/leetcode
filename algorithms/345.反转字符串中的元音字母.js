/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (47.74%)
 * Likes:    55
 * Dislikes: 0
 * Total Accepted:    13.2K
 * Total Submissions: 27.6K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 *
 * 示例 1:
 *
 * 输入: "hello"
 * 输出: "holle"
 *
 *
 * 示例 2:
 *
 * 输入: "leetcode"
 * 输出: "leotcede"
 *
 * 说明:
 * 元音字母不包含字母"y"。
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const arr = s.split("");
  const vowels = ["a", "e", "o", "i", "u", "A", "E", "O", "I", "U"];
  let lp = 0,
    rp = s.length - 1;
  while (lp < rp) {
    if (!~vowels.indexOf(arr[lp])) {
      lp++;
      continue;
    }
    if (!~vowels.indexOf(arr[rp])) {
      rp--;
      continue;
    }
    const tmp = arr[lp];
    arr[lp] = arr[rp];
    arr[rp] = tmp;
    lp++;
    rp--;
  }
  return arr.join("");
};
