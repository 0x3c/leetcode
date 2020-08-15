#include <iostream>
#include <vector>
using namespace std;

/*
 * @lc app=leetcode.cn id=169 lang=cpp
 *
 * [169] 求众数
 */

// @lc code=start
class Solution {
 public:
  int majorityElement(vector<int>& nums) {
    return dfs(nums, 0, nums.size() - 1);
  }
  int dfs(const vector<int>& nums, const int start, const int end) {
    if (start == end) return nums.at(start);
    int mid = start + (end - start) / 2;
    int left = dfs(nums, start, mid);
    int right = dfs(nums, mid + 1, end);
    if (left == right) return left;
    int leftCount = countNum(nums, left, start, end);
    int rightCount = countNum(nums, right, start, end);
    return leftCount > rightCount ? left : right;
  }

 private:
  int countNum(const vector<int>& nums, int n, int start, int end) {
    int count = 0;
    for (int i = start; i <= end; ++i) {
      if (nums[i] == n) count++;
    }
    return count;
  }
};
// @lc code=end
