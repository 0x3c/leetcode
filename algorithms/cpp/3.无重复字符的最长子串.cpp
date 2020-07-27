/*
 * @lc app=leetcode.cn id=3 lang=cpp
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (30.79%)
 * Likes:    2214
 * Dislikes: 0
 * Total Accepted:    183.9K
 * Total Submissions: 595.7K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int len = 0, start = 0, end = 0;
        while (start < s.size() - len && len < s.size() - start) {
            for (end = start + 1; end < s.size(); end++) {
                int idx = s.substr(start, end - start).find(s[end]);
                if (idx > -1)break;
            }
            len = (end - start) > len ? (end - start) : len;
            start++;
        }
        return len;  
    }
};

// use hash
// @lc code=start
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<int, int> map;
        int len = 0, size = s.size();
        for (int i = 0, j = 0; i < size; i++) {
            for (; j < size; j++) {
                if (map[s[j]])break;
                map[s[j]]++;
            }
            map[s[i]] = 0;
            len = max(j - i, len);
        }
        return len;
    }
};
// @lc code=end
