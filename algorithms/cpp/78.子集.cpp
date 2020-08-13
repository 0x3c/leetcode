#include <iostream>
#include <vector>
using namespace std;

/*
 * @lc app=leetcode.cn id=78 lang=cpp
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (74.48%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    32.4K
 * Total Submissions: 43.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start
class Solution {
 public:
  void dfs(int curIndex, vector<int>& curAns, vector<int>& nums,
           vector<vector<int>>& ans) {
    ans.push_back(curAns);
    if (curIndex == nums.size()) {
      return;
    }

    for (int i = curIndex; i < nums.size(); i++) {
      vector<int> tmp = vector(curAns);
      tmp.push_back(nums[i]);
      dfs(i + 1, tmp, nums, ans);
    }
  }
  vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> ans = {};
    vector<int> curAns = {};
    dfs(0, curAns, nums, ans);
    return ans;
  }
};
// @lc code=end
