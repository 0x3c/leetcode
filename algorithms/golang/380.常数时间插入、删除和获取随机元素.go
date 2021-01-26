import (
	"math/rand"
	"time"
)

/*
 * @lc app=leetcode.cn id=380 lang=golang
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**  利用 hashmap 和 数组实现, hashmap 存取每个元素在数组中的索引; 删除时, 将待删除元素和最后一个元素交换, 再删除最后一个元素, 实现 O(1)的删除 */
type RandomizedSet struct {
	hash  map[int]int
	nums  []int
	size  int
	rand1 *rand.Rand
}

/** Initialize your data structure here. */
func Constructor() RandomizedSet {
	seed := time.Now().UnixNano()
	rand1 := rand.New(rand.NewSource(seed))
	return RandomizedSet{rand1: rand1, size: 0, nums: []int{}, hash: map[int]int{}}
}

/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
func (this *RandomizedSet) Insert(val int) bool {
	_, ok := this.hash[val]
	if ok {
		return false
	}
	this.hash[val] = this.size
	this.nums = append(this.nums, val)
	this.size++
	return true
}

/** Removes a value from the set. Returns true if the set contained the specified element. */
func (this *RandomizedSet) Remove(val int) bool {
	index, ok := this.hash[val]
	if ok {
		last := this.nums[this.size-1]
		this.hash[last] = index
		this.nums[index] = last

		delete(this.hash, val)
		this.nums = this.nums[0 : this.size-1]
		this.size--
		return true
	} else {
		return false
	}
}

/** Get a random element from the set. */
func (this *RandomizedSet) GetRandom() int {
	if this.size > 0 {
		index := this.rand1.Intn(this.size)
		return this.nums[index]
	} else {
		return -1
	}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */
// @lc code=end
