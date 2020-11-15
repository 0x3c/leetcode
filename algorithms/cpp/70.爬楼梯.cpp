#include <unordered_map>
using namespace std;
/*
 * @lc app=leetcode.cn id=70 lang=cpp
 *
 * [70] 爬楼梯
 */

/**
 * 递归并剪枝(缓存减少重复计算)
 */
class Solution2 {
 private:
  unordered_map<int, int> cache;

 public:
  int climbStairs(int n) {
    if (n < 3) return n;
    if (!cache.count(n)) {
      cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
    }
    return cache.at(n);
  }
};

// @lc code=start
/**
 * 转化为 Fibonacci 问题
 */
class Solution {
 public:
  int climbStairs(int n) {
    int cur = 2, pre = 1;
    if (n <= 3) return n;
    for (int i = 2; i < n; i++) {
      int tmp = cur;
      cur += pre;
      pre = tmp;
    }
    return cur;
  }
};
// @lc code=end
