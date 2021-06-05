/*
 * @lc app=leetcode.cn id=20 lang=rust
 *
 * [20] 有效的括号
 */

// @lc code=start
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let chars: Vec<char> = s.chars().collect();
        let mut stack = vec![];
        for i in 0..chars.len() {
            match chars[i] {
                '(' => stack.push(')'),
                '[' => stack.push(']'),
                '{' => stack.push('}'),
                ch => {
                    if (stack.is_empty() || stack.pop().unwrap() != ch) {
                        return false;
                    }
                }
            }
        }
        stack.is_empty()
    }
}
// @lc code=end

