#include <iostream>
#include <queue>
#include <unordered_map>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=347 lang=cpp
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
struct KVNode {
  int key;
  int val;

  KVNode(int k, int v) : key(k), val(v) {}
};

struct comparator {
  bool operator()(KVNode n1, KVNode n2) { return n1.val < n2.val; }
};
class Solution {
 public:
  vector<int> topKFrequent(vector<int> &nums, int k) {
    vector<int> res;
    unordered_map<int, int> hash;
    for (int i = 0; i < nums.size(); i++) {
      hash[nums[i]] = hash.count(nums[i]) ? hash[nums[i]] + 1 : 1;
    }
    priority_queue<KVNode, vector<KVNode>, comparator> maxHeap;
    auto iter = hash.begin();
    for (auto iter = hash.begin(); iter != hash.end(); iter++) {
      KVNode *node = new KVNode(iter->first, iter->second);
      maxHeap.push(*node);
    }
    while (k--) {
      KVNode node = maxHeap.top();
      res.push_back(node.key);
      maxHeap.pop();
    }
    return res;
  }
};
// @lc code=end