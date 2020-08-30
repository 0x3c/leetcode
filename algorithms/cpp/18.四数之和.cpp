#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=18 lang=cpp
 *
 * [18] 四数之和
 */

// @lc code=start
class Solution {
 public:
  vector<vector<int> > fourSum(vector<int>& nums, int target) {
    vector<vector<int> > ans;
    if (nums.size() < 4) return ans;
    sort(nums.begin(), nums.end());
    for (int i = 0; i < nums.size() - 3; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) continue;
      for (int j = i + 1; j < nums.size() - 2; j++) {
        if (j > i + 1 && nums[j] == nums[j - 1]) continue;
        int left = j + 1, right = nums.size() - 1;
        while (left < right) {
          int sum = nums[i] + nums[j] + nums[left] + nums[right];
          if (sum < target) {
            left++;
          } else if (sum > target) {
            right--;
          } else {
            ans.push_back({nums[i], nums[j], nums[left], nums[right]});
            while (left < right && nums[left + 1] == nums[left]) {
              left++;
            }
            while (left < right && nums[right - 1] == nums[left]) {
              right--;
            }
            left++;
            right--;
          }
        }
      }
    }
    return ans;
  }
};
// @lc code=end
