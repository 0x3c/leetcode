/*
 * @lc app=leetcode.cn id=24 lang=cpp
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (66.22%)
 * Likes:    568
 * Dislikes: 0
 * Total Accepted:    130.7K
 * Total Submissions: 197.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *swapPairs(ListNode *head) {
        if (!head || !head->next)return head;
        ListNode *leader = new ListNode(-1);
        leader->next = head;
        ListNode *prev = leader;
        while (head && head->next) {
            ListNode *first = head;
            ListNode *second = head->next;
            first->next = second->next;
            second->next = first;
            prev->next = second;
            prev = first;
            head = first->next;
        }
        return leader->next;
    }
};
// @lc code=end

