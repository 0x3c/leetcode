/**
 * Initialize your data structure here.
 */

// @lc code=start

var Trie = function() {
  this.isEnd = false;
  this.trie = Array.from({ length: 26 }, (_) => null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let head = this;
  for (let ch of word) {
    if (!head.trie[ch.charCodeAt() - "a".charCodeAt()]) {
      head.trie[ch.charCodeAt() - "a".charCodeAt()] = new Trie();
    }
    head = head.trie[ch.charCodeAt() - "a".charCodeAt()];
  }
  head.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let head = this;
  for (let ch of word) {
    if (!head.trie[ch.charCodeAt() - "a".charCodeAt()]) {
      return false;
    }
    head = head.trie[ch.charCodeAt() - "a".charCodeAt()];
  }
  return head.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let head = this;
  for (let ch of prefix) {
    if (!head.trie[ch.charCodeAt() - "a".charCodeAt()]) {
      return false;
    }
    head = head.trie[ch.charCodeAt() - "a".charCodeAt()];
  }
  return true;
};
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
