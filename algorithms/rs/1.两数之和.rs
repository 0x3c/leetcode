/*
 * @lc app=leetcode.cn id=1 lang=rust
 *
 * [1] 两数之和
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut cache: HashMap<i32, i32> = HashMap::new();
        for i in 0..nums.len() {
            if let Some(k) = cache.get(&nums[i]) {
                return vec![*k, i as i32];
            } else {
               cache.insert(target - nums[i], i as i32);
            }
        }
        panic!("not found");
    }
}
// @lc code=end

