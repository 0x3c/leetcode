#include <iostream>
#include <queue>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
using namespace std;
/*
 * @lc app=leetcode.cn id=127 lang=cpp
 *
 * [127] 单词接龙
 */

// @lc code=start
class Solution {
 public:
  int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    // 转化为 set, 提高查询速度
    unordered_set<string> word_set(wordList.begin(), wordList.end());
    // 结束单词不存在
    if (word_set.find(endWord) == word_set.end()) return 0;
    queue<string> queue;
    // 开始单词加入队列
    queue.push(beginWord);
    // 记录已访问单词及其最短到达路径, 初始化, 开始单词为1
    unordered_map<string, int> visited{{beginWord, 1}};

    while (!queue.empty()) {
      string word = queue.front();
      queue.pop();
      int level = visited[word];
      if (word == endWord) return level;
      for (int i = 0; i < word.size(); i++) {
        char temp = word[i];
        for (int j = 0; j < 26; j++) {
          word[i] = j + 'a';
          // 变换后单词为结束单词
          if (word == endWord) return level + 1;

          // 变换后单词存在于字典, 且未访问过该单词,
          // 记录该最短路径并将其加入队列
          if (word_set.find(word) != word_set.end() && !visited.count(word)) {
            visited[word] = level + 1;
            queue.push(word);
          }
        }
        word[i] = temp;
      }
    }
    // 无法到达结束单词
    return 0;
  }
};
// @lc code=end
