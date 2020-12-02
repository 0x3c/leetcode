#include <string>
#include <unordered_set>
#include <vector>
using std::string;
using std::unordered_set;
using std::vector;
/*
 * @lc app=leetcode.cn id=491 lang=cpp
 *
 * [491] 递增子序列
 */

// @lc code=start
class Solution {
 private:
  vector<vector<int> > ans;
  vector<int> temp;
  unordered_set<string> set;

  void save_nums(const vector<int>& nums) {
    if (nums.size() < 2) return;
    string temp;
    for (auto n : nums) {
      temp += n;
    }
    // if exist -> return
    if (set.find(temp) != set.end()) return;
    ans.push_back(nums);
    set.insert(temp);
  }
  void dfs(int level, int last, const vector<int>& nums) {
    //   terminator
    if (level == nums.size()) {
      save_nums(temp);
      return;
    }

    // process current logic
    // select current num
    if (nums[level] >= last) {
      temp.push_back(nums[level]);
      dfs(level + 1, nums[level], nums);
      temp.pop_back();
    }
    // not select current num
    dfs(level + 1, last, nums);
  }

 public:
  vector<vector<int> > findSubsequences(vector<int>& nums) {
    dfs(0, INT_MIN, nums);
    return ans;
  }
};
// @lc code=end
