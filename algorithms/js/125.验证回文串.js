/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isValidLetter(s) {
  s = s.toLocaleLowerCase();
  if ((s[0] >= "0" && s[0] <= "9") || (s[0] >= "a" && s[0] <= "z")) {
    return true;
  }
  return false;
}
var isPalindrome = function(s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    while (l < r && !isValidLetter(s[l])) {
      l++;
    }
    while (l < r && !isValidLetter(s[r])) {
      r--;
    }
    if (s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()) {
      return false;
    }

    l++;
    r--;
  }
  return true;
};
// @lc code=end
