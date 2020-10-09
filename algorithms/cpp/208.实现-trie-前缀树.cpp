#include <iostream>
#include <string>

using namespace std;

/*
 * @lc app=leetcode.cn id=208 lang=cpp
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie {
 private:
  bool isEnd;
  Trie* next[26];

 public:
  /** Initialize your data structure here. */
  Trie() {
    isEnd = false;
    memset(next, 0, sizeof(next));
  }

  /** Inserts a word into the trie. */
  void insert(string word) {
    Trie* head = this;
    for (auto ch : word) {
      if (head->next[ch - 'a'] == nullptr) {
        Trie* node = new Trie();
        head->next[ch - 'a'] = node;
      }
      head = head->next[ch - 'a'];
    }
    head->isEnd = true;
  }

  /** Returns if the word is in the trie. */
  bool search(string word) {
    Trie* head = this;
    for (auto ch : word) {
      if (head->next[ch - 'a'] == nullptr) {
        return false;
      }
      head = head->next[ch - 'a'];
    }
    return head->isEnd;
  }

  /** Returns if there is any word in the trie that starts with the given
   * prefix. */
  bool startsWith(string prefix) {
    Trie* head = this;
    for (auto ch : prefix) {
      if (head->next[ch - 'a'] == nullptr) {
        return false;
      }
      head = head->next[ch - 'a'];
    }
    return true;
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
// @lc code=end
