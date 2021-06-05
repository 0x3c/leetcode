/*
 * @lc app=leetcode.cn id=26 lang=rust
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let len = nums.len();
        if len < 2 {
            return len as i32;
        }
        let mut i = 0;
        for j in 1..len {
            if nums[i] != nums[j] {
                if (j - i > 1) {
                    nums[i + 1] = nums[j];
                }
                i += 1;
            }
        }
        (i + 1) as i32
    }
}
// @lc code=end

