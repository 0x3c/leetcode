/*
 * @lc app=leetcode.cn id=2 lang=cpp
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (35.24%)
 * Likes:    2858
 * Dislikes: 0
 * Total Accepted:    183.9K
 * Total Submissions: 521.3K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
        ListNode *head = new ListNode(-1);
        ListNode *p = head;
        int bit = 0, sum = 0;
        while (l1 && l2) {
            sum = l1->val + l2->val + bit;
            p->next = new ListNode(sum % 10);
            p = p->next;
            l1 = l1->next;
            l2 = l2->next;
            bit = sum / 10;
        }
        l1 = l1 != NULL ? l1 : l2;
        while (l1) {
            sum = l1->val + bit;
            p->next = new ListNode(sum % 10);
            p = p->next;
            bit = sum / 10;
            l1 = l1->next;
        }
        if (bit != 0) {
            p->next = new ListNode(bit);
        }
        p = head->next;
        delete head;
        return p;
    }
};
// @lc code=end
