/*
 * @lc app=leetcode.cn id=933 lang=golang
 *
 * [933] 最近的请求次数
 */

// @lc code=start
type RecentCounter struct {
	queue []int
	size  int
}

func Constructor() RecentCounter {
	rc := RecentCounter{queue: []int{}, size: 0}
	return rc
}

func (this *RecentCounter) Ping(t int) int {
	this.queue = append(this.queue, t)
	this.size++
	i := 0
	for ; t-this.queue[i] > 3000; i++ {
	}
	this.queue = this.queue[i:]
	this.size = this.size - i
	return this.size
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */
// @lc code=end
