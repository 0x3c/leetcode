/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (60.61%)
 * Likes:    418
 * Dislikes: 0
 * Total Accepted:    71.4K
 * Total Submissions: 117.6K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 *
 *
 *
 * 示例 1:
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 *
 * 示例 2:
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 *
 *
 * 提示：
 *
 *
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 *
 *
 */

// @lc code=start
class Heap {
  default_comparator = (a, b) => a - b;
  constructor(capacity, comparator) {
    this.capacity = capacity;
    this.size = 0;
    this.heap = [];
    this.comparator = comparator || this.default_comparator;
  }
  isEmpty = () => this.size === 0;
  isFull = () => this.size === this.capacity;
  getKChild = (index, k) => 2 * index + k;
  hasChild = (index) => 2 * index + 1 < this.size;
  hasLeftChild = (index) => 2 * index + 1 < this.size;
  hasRightChild = (index) => 2 * index + 2 < this.size;
  getMaxChild = (index) => {
    if (!this.hasChild(index)) {
      throw new Error("no child");
    }
    if (!this.hasRightChild(index)) {
      return this.getKChild(index, 1);
    }
    const left = this.getKChild(index, 1);
    const right = this.getKChild(index, 2);
    return this.comparator(this.heap[left], this.heap[right]) >= 0
      ? left
      : right;
  };
  getMinChild = (index) => {
    if (!this.hasChild(index)) {
      throw new Error("no child");
    }
    if (!this.hasRightChild(index)) {
      return this.getKChild(index, 1);
    }
    const left = this.getKChild(index, 1);
    const right = this.getKChild(index, 2);
    return this.comparator(this.heap[left], this.heap[right]) >= 0
      ? right
      : left;
  };
  getParent = (index) => Math.floor((index - 1) / 2);
  insert(ele) {
    if (this.isFull()) {
      throw new Error("heap is full");
    }
    this.heap[this.size] = ele;
    this.heapifyUp(this.size++);
    this.heap.length = this.size;
  }
  delete(index) {
    if (this.isEmpty()) {
      throw new Error("heap is empty");
    }
    const delEle = this.heap[index];
    this.heap[index] = this.heap[--this.size];
    this.heap.length = this.size;
    this.heapifyDown(index);
    return delEle;
  }
  heapifyUp(index) {
    const ele = this.heap[index];
    while (
      index > 0 &&
      this.comparator(this.heap[this.getParent(index)], ele) < 0
    ) {
      this.heap[index] = this.heap[this.getParent(index)];
      index = this.getParent(index);
    }
    this.heap[index] = ele;
  }
  heapifyDown(index) {
    if (this.isEmpty()) return;
    const ele = this.heap[index];
    let maxChild;
    while (this.hasLeftChild(index)) {
      maxChild = this.getMaxChild(index);
      if (this.comparator(this.heap[maxChild], ele) <= 0) break;
      this.heap[index] = this.heap[maxChild];
      index = maxChild;
    }
    this.heap[index] = ele;
  }
}
/*
 * @description 大顶堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if (nums.length === 0 || k === 0) return [];
  const hashmap = new Map();
  nums.forEach((n) => hashmap.set(n, (hashmap.get(n) || 0) + 1));
  const heap = new Heap(hashmap.size, (a, b) => a.v - b.v);
  hashmap.forEach((v, k) => heap.insert({ k, v }));
  const res = [];
  while (k--) {
    res.push(heap.delete(0).k);
  }
  return res;
};

// @lc code=end
