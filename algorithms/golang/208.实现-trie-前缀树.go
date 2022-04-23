/*
 * @lc app=leetcode.cn id=208 lang=golang
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
type Trie struct {
	children [26]*Trie
	isEnd    bool
}

func Constructor() Trie {
	return Trie{}
}

func (this *Trie) Insert(word string) {
	parent := this
	for _, ch := range word {
		node := parent.children[ch-'a']
		if node == nil {
			node = &Trie{}
			parent.children[int(ch-'a')] = node
		}
		parent = node
	}
	parent.isEnd = true
}

func (this *Trie) Search(word string) bool {
	parent := this
	for _, ch := range word {
		node := parent.children[ch-'a']
		if node == nil {
			return false
		} else {
			parent = node
		}
	}
	return parent.isEnd
}

func (this *Trie) StartsWith(prefix string) bool {
	parent := this
	for _, ch := range prefix {
		node := parent.children[ch-'a']
		if node == nil {
			return false
		} else {
			parent = node
		}
	}
	return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
// @lc code=end
