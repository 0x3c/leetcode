/*
 * @lc app=leetcode.cn id=283 lang=rust
 *
 * [283] 移动零
 */
// @lc code=start
impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut i = 0;
        for j in 0..nums.len() {
            if (nums[j] != 0) {
                nums[i] = nums[j];
                i += 1;
            }
        }
        while i < nums.len() {
            nums[i] = 0;
            i += 1;
        }
    }
}
// @lc code=end
