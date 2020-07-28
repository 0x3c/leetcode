/*
 * @lc app=leetcode.cn id=66 lang=cpp
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.27%)
 * Likes:    328
 * Dislikes: 0
 * Total Accepted:    68.7K
 * Total Submissions: 170.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    vector<int> plusOne(vector<int> &digits) {
        int mod = 1;
        for (int i = digits.size() - 1; i > -1; i--) {
            if (!mod)break;
            int sum = digits[i] + mod;
            digits[i] = sum % 10;
            mod = sum / 10;
        }
        if (mod) { digits.insert(digits.begin(), mod); }
        return digits;
    }
};
// @lc code=end

