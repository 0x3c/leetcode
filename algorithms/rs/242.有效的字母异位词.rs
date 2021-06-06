/*
 * @lc app=leetcode.cn id=242 lang=rust
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut map = vec![0; 26];
        for ch in s.chars() {
            map[ch as usize - 97] += 1;
        }
        for ch in t.chars() {
            map[ch as usize - 97] -= 1;
        }
        for n in map {
            if (n != 0) {
                return false;
            }
        }
        true
    }
}
// @lc code=end

