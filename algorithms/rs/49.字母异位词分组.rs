/*
 * @lc app=leetcode.cn id=49 lang=rust
 *
 * [49] 字母异位词分组
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map: HashMap<Vec<u8>, Vec<String>> = HashMap::new();
        for str in strs {
            let mut vec = str.as_bytes().to_vec();
            vec.sort();
            let mut vec = map.entry(vec).or_insert(vec![]);
            vec.push(str);
        }
        map.values().cloned().collect()
    }
}
// @lc code=end

