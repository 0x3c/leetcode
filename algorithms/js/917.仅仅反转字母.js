/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  let start = 0,
    len = s.length,
    end = len - 1;
  const ret = new Array(len);
  while (start <= end) {
    while (start < end && !isLetter(s[start])) {
      ret[start] = s[start];
      start++;
    }
    while (start < end && !isLetter(s[end])) {
      ret[end] = s[end];
      end--;
    }
    if (start == end) {
      ret[start] = s[start];
    } else {
      ret[start] = s[end];
      ret[end] = s[start];
    }
    start++;
    end--;
  }
  return ret.join("");
};
function isLetter(ch) {
  const ascii = ch.charCodeAt(0);
  return (ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90);
}
// @lc code=end
