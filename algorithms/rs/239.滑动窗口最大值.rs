/*
 * @lc app=leetcode.cn id=239 lang=rust
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
use std::collections::VecDeque;
impl Solution {
    pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let len = nums.len();
        if k == 1 {
            return nums;
        }
        let mut de_queue = VecDeque::with_capacity(k as usize);
        let mut ans = vec![];
        for i in (0 as usize)..len {
            Solution::push(&mut de_queue, nums[i]);
            if i as i32 == k - 1 {
                ans.push(Solution::max(&de_queue))
            } else if i as i32 > k - 1 {
                Solution::pop(&mut de_queue, nums[i - k as usize]);
                ans.push(Solution::max(&de_queue))
            }
        }
        ans
    }
    fn max(dequeue: &VecDeque<i32>) -> i32 {
        *dequeue.front().unwrap()
    }
    fn push(dequeue: &mut VecDeque<i32>, v: i32) {
        while !dequeue.is_empty() && *dequeue.back().unwrap() < v {
            dequeue.pop_back();
        }
        dequeue.push_back(v);
    }
    fn pop(dequeue: &mut VecDeque<i32>, v: i32) {
        if *dequeue.front().unwrap() == v {
            dequeue.pop_front();
        }
    }
}
// @lc code=end

