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

/**
 * 单向 BFS
 */
class Solution_BFS {
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

// @lc code=start
/**
 *
 */
class Solution {
 public:
  int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    // 转化为 set, 提高查询速度
    unordered_set<string> word_set(wordList.begin(), wordList.end());
    // 结束单词不存在
    if (word_set.find(endWord) == word_set.end()) return 0;

    // 生成双端队列
    queue<string> front_queue;
    queue<string> back_queue;
    front_queue.push(beginWord);
    back_queue.push(endWord);

    // 记录双端队列访问情况
    unordered_set<string> front_visited{beginWord};
    unordered_set<string> back_visited{endWord};

    int dist = 0;

    while (!front_queue.empty()) {
      dist++;
      //   处理小队列
      if (front_queue.size() > back_queue.size()) {
        front_queue.swap(back_queue);
        front_visited.swap(back_visited);
      }

      int len = front_queue.size();
      // 一次处理完
      while (len--) {
        string word = front_queue.front();
        front_queue.pop();

        for (int i = 0; i < word.size(); i++) {
          char temp = word[i];
          for (int j = 0; j < 26; j++) {
            word[i] = j + 'a';
            // 当前队列已访问过该词汇, 跳过
            if (front_visited.find(word) != front_visited.end()) continue;
            // 另一端队列已访问过该词汇, 只需要一步即可到达, 返回 dist + 1
            if (back_visited.find(word) != back_visited.end()) return dist + 1;
            // 都未访问过
            // 新单词存在于字典中, 则添加到队列, 并设为已访问
            if (word_set.find(word) != word_set.end()) {
              front_queue.push(word);
              front_visited.insert(word);
            }
          }
          // 重置状态
          word[i] = temp;
        }
      }
    }
    // 无法到达结束单词
    return 0;
  }
};
// @lc code=end
