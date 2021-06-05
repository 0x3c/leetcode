/*
 * @lc app=leetcode.cn id=66 lang=rust
 *
 * [66] 加一
 */

// @lc code=start
impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        let mut ans: Vec<i32> = digits.clone();
        let mut last = (digits.len() - 1);
        while last >= 0 {
            ans[last] = (digits[last] + 1) % 10;
            if digits[last] < 9 {
                return ans;
            }
            if last == 0 {
                break;
            }
            last -= 1;
        }
        ans = vec![0; digits.len() + 1];
        ans[0] = 1;
        return ans;
    }
}
// @lc code=end

