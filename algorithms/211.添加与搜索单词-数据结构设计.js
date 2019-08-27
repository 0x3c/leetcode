/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 *
 * https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/description/
 *
 * algorithms
 * Medium (39.17%)
 * Likes:    63
 * Dislikes: 0
 * Total Accepted:    3.7K
 * Total Submissions: 9.4K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n' +
  '[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * 设计一个支持以下两种操作的数据结构：
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * 
 * search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。
 * 
 * 示例:
 * 
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 
 * 说明:
 * 
 * 你可以假设所有单词都是由小写字母 a-z 组成的。
 * 
 */
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.tree = {};
  this.list = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
};

/**
 * 查找前缀树的枝叶, 返回是否有该字符串
 * @param {string} prefix
 * @param {object} subtree
 * @return {boolean}
 */
WordDictionary.prototype.getTrees = function(prefix, subtree) {
  if (!prefix) return subtree.isEnd; // 找到指定前缀
  // 普通字符串
  if (prefix[0] !== ".") {
    if (!subtree[prefix[0]]) return false;
    return this.getTrees(prefix.slice(1), subtree[prefix[0]]);
  }
  // 通配符.
  for (let ch of this.list) {
    if (!subtree[ch]) continue;
    const res = this.getTrees(prefix.slice(1), subtree[ch]);
    if (res) {
      return res;
    }
  }
  return false;
};
/**
 * 更新前缀树
 * @param {string} prefix
 * @param {object} subtree
 */
WordDictionary.prototype.updateTree = function(prefix, subtree) {
  if (!prefix) return (subtree.isEnd = true), this.tree;
  if (!subtree[prefix[0]]) subtree[prefix[0]] = { isEnd: false };
  return this.updateTree(prefix.slice(1), subtree[prefix[0]]);
};
/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  this.updateTree(word, this.tree);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return this.getTrees(word, this.tree);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
