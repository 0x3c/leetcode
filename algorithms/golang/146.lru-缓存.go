package main

/*
 * @lc app=leetcode.cn id=146 lang=golang
 *
 * [146] LRU 缓存
 */

// @lc code=start
type DLinkedNode struct {
	next *DLinkedNode
	prev *DLinkedNode
	key  int
	val  int
}

type LRUCache struct {
	capacity   int
	len        int
	head, tail *DLinkedNode
	cache      map[int]*DLinkedNode
}

func Constructor(capacity int) LRUCache {
	head, tail := &DLinkedNode{}, &DLinkedNode{}
	head.next = tail
	tail.prev = head
	return LRUCache{capacity, 0, head, tail, map[int]*DLinkedNode{}}
}

func (this *LRUCache) Get(key int) int {
	node := this.cache[key]
	if node != nil {
		this.putIntoFront(node)
		return node.val
	} else {
		return -1
	}
}

func (this *LRUCache) putIntoFront(node *DLinkedNode) {
	if node.prev != nil {
		node.prev.next, node.next.prev = node.next, node.prev
	}

	this.head.next.prev = node
	node.next = this.head.next
	this.head.next = node
	node.prev = this.head
}

func (this *LRUCache) Put(key int, value int) {
	if this.cache[key] != nil {
		node := this.cache[key]
		node.val = value

		this.putIntoFront(node)

	} else {
		if this.len == this.capacity {
			node := this.tail.prev
			node.prev.next = this.tail
			this.tail.prev = this.tail.prev.prev
			delete(this.cache, node.key)
			this.len--
		}
		node := &DLinkedNode{key: key, val: value}
		this.putIntoFront(node)

		this.cache[key] = node
		this.len++
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */
// @lc code=end

func main() {
	lRUCache := Constructor(2)
	lRUCache.Put(1, 1)
	lRUCache.Put(2, 2)
	lRUCache.Get(1)
	lRUCache.Put(3, 3)

	lRUCache.Get(2)

	lRUCache.Put(4, 4)
	lRUCache.Get(1)
	lRUCache.Get(3)
	lRUCache.Get(4)

}
