/*
 * @lc app=leetcode.cn id=70 lang=rust
 *
 * [70] 爬楼梯
 */

// @lc code=start
impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        let mut prev = 1;
        let mut cur = 2;
        if n < 3 {
            return n;
        }
        for i in 3..=n {
            let temp = cur;
            cur = cur + prev;
            prev = temp;
        }
        cur
    }
}
// @lc code=end

