/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 *
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (60.52%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    11.4K
 * Total Submissions: 18.8K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n' +
  '[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 * 
 * 示例:
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // 返回 true
 * trie.search("app");     // 返回 false
 * trie.startsWith("app"); // 返回 true
 * trie.insert("app");   
 * trie.search("app");     // 返回 true
 * 
 * 说明:
 * 
 * 
 * 你可以假设所有的输入都是由小写字母 a-z 构成的。
 * 保证所有输入均为非空字符串。
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.trees = {};
};

/**
 * 获取前缀树的枝叶
 * @param {string} prefix
 * @param {object} tree
 */
Trie.prototype.getTrees = function(prefix, tree) {
  if (!prefix) return tree;
  if (!tree[prefix[0]]) return false;
  return this.getTrees(prefix.slice(1), tree[prefix[0]]);
};
/**
 * 更新前缀树的枝叶
 * @param {string} prefix
 * @param {object} tree
 */
Trie.prototype.setTrees = function(prefix, tree) {
  if (!prefix) return (tree.isEnd = true);
  if (!tree[prefix[0]]) tree[prefix[0]] = {};
  return this.setTrees(prefix.slice(1), tree[prefix[0]]);
};
/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.setTrees(word, this.trees);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const tree = this.getTrees(word, this.trees);
  return tree ? !!tree.isEnd : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  const tree = this.getTrees(prefix, this.trees);
  return tree ? true : false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
