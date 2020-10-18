#include <iostream>
#include <set>
#include <string>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=212 lang=cpp
 *
 * [212] 单词搜索 II
 */

// @lc code=start
class Trie {
 private:
  bool isEnd;
  Trie* next[52];

 public:
  Trie() {
    isEnd = false;
    memset(next, 0, sizeof(next));
  }
  int get_ch(const char& ch) {
    return ch - 'a' > -1 ? ch - 'a' + 26 : ch - 'A';
  }
  void insert(string word) {
    Trie* head = this;
    for (auto ch : word) {
      if (head->next[get_ch(ch)] == nullptr) {
        Trie* node = new Trie();
        head->next[get_ch(ch)] = node;
      }
      head = head->next[get_ch(ch)];
    }
    head->isEnd = true;
  }
  bool search(string word) {
    Trie* head = this;
    for (auto ch : word) {
      if (head->next[get_ch(ch)] == nullptr) return false;
      head = head->next[get_ch(ch)];
    }
    return head->isEnd;
  }
  bool startsWith(string word) {
    Trie* head = this;
    for (auto ch : word) {
      if (head->next[get_ch(ch)] == nullptr) return false;
      head = head->next[get_ch(ch)];
    }
    return true;
  }
};

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

class Solution {
 private:
  Trie* root;

 public:
  bool in_size(int i, int j, int x, int y) {
    return i < x && i > -1 && j < y && j > -1;
  }
  void dfs(string prefix, vector<vector<char> >& board, set<string>& cur_ans,
           int i, int j, const int row, const int& col) {
    // terminator
    if (!root->startsWith(prefix)) return;
    if (root->search(prefix)) {
      //   cur_ans.push_back(prefix);
      cur_ans.insert(prefix);
    };

    char ch = board[i][j];
    board[i][j] = 0;

    // drill down
    for (int k = 0; k < 4; k++) {
      if (in_size(i + dx[k], j + dy[k], row, col) &&
          board[i + dx[k]][j + dy[k]]) {
        dfs(prefix + board[i + dx[k]][j + dy[k]], board, cur_ans, i + dx[k],
            j + dy[k], row, col);
      }
    }
    // restore state
    board[i][j] = ch;
  }

  vector<string> findWords(vector<vector<char> >& board,
                           vector<string>& words) {
    set<string> cur_set;
    for (auto str : cur_set) {
      cout << str << endl;
    }
    root = new Trie();
    for (auto word : words) {
      root->insert(word);
    }
    int row = board.size(), col = board[0].size();
    for (int i = 0; i < board.size(); i++) {
      for (int j = 0; j < board[i].size(); j++) {
        string prefix = string(1, board[i][j]);
        if (root->startsWith(prefix)) {
          dfs(prefix, board, cur_set, i, j, row, col);
        }
      }
    }
    return vector<string>(cur_set.begin(), cur_set.end());
  }
};
// @lc code=end
