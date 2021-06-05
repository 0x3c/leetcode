/*
 * @lc app=leetcode.cn id=155 lang=rust
 *
 * [155] 最小栈
 */

// @lc code=start
struct MinStack {
    stack: Vec<i32>,
    min_stack: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MinStack {
    /** initialize your data structure here. */
    fn new() -> Self {
        MinStack {
            stack: vec![],
            min_stack: vec![],
        }
    }

    fn push(&mut self, val: i32) {
        self.stack.push(val);
        if (self.min_stack.is_empty() || *self.min_stack.last().unwrap() >= val) {
            self.min_stack.push(val);
        }
    }

    fn pop(&mut self) {
        if (self.stack.pop().unwrap() == *self.min_stack.last().unwrap()) {
            self.min_stack.pop();
        }
    }

    fn top(&self) -> i32 {
        *self.stack.last().unwrap()
    }

    fn get_min(&self) -> i32 {
        *self.min_stack.last().unwrap()
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = MinStack::new();
 * obj.push(val);
 * obj.pop();
 * let ret_3: i32 = obj.top();
 * let ret_4: i32 = obj.get_min();
 */
// @lc code=end

