/*
 * @lc app=leetcode.cn id=239 lang=golang
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * 单调递减栈
 * 每次窗口移动，弹出窗口外元素，新元素从栈顶开始与栈内元素碰撞，小于新元素的值全部弹出，最后新元素入栈。
 * 单调栈底部元素则为当前滑动窗口最大元素。
 * 时间复杂度O(n)，空间复杂度O(k)。
 */
func maxSlidingWindow(nums []int, k int) []int {
	ans := []int{}
	queue := make([]int, 0)
	for i, val := range nums {
		if i >= k && len(queue) > 0 && queue[0] == nums[i-k] {
			queue = queue[1:]
		}
		for len(queue) > 0 && queue[len(queue)-1] < val {
			queue = queue[:len(queue)-1]
		}
		queue = append(queue, val)
		if i >= k-1 {
			ans = append(ans, queue[0])
		}
	}
	return ans
}

// @lc code=end

