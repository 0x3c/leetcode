import (
	"math/rand"
	"time"
)

/*
 * @lc app=leetcode.cn id=528 lang=golang
 *
 * [528] 按权重随机选择
 */

// @lc code=start
type Solution struct {
	w    []int
	rand *rand.Rand
	sum  int
}

func Constructor(w []int) Solution {
	seed := time.Now().UnixNano()
	rand1 := rand.New(rand.NewSource(seed))
	for i, n := range w {
		if i == 0 {
			continue
		}
		w[i] = n + w[i-1]
	}
	sum := w[len(w)-1]
	return Solution{w, rand1, sum}
}

func (this *Solution) PickIndex() int {
	n1 := this.rand.Intn(this.sum)
	left, right := 0, len(this.w)-1
	index := 0
	for left < right {
		if this.w[index] > n1 {
			right = index
		} else {
			left = index + 1
		}
		index = (right + left) / 2
	}
	return index
}

/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(w);
 * param_1 := obj.PickIndex();
 */
// @lc code=end
