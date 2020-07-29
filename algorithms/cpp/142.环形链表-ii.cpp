/*
 * @lc app=leetcode.cn id=142 lang=cpp
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (51.13%)
 * Likes:    561
 * Dislikes: 0
 * Total Accepted:    99.4K
 * Total Submissions: 194.3K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 说明：不允许修改给定的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 你是否可以不用额外空间解决此题？
 * 
 */

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */


/**
 * Using hash 
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        unordered_map<ListNode *, bool> hash;
        while (head) {
            if (hash.count(head)) {
                return head;
            }
            hash[head] = true;
            head = head->next;
        }
        return NULL;
    }
};

// @lc code=start
/**
  * @description 将链表分为两段: 起点到环入口 L + 环长 C
 * 1. walker 走 L 距离到环入口, runner 走了 2L, 离环入口 L, 相距 C - L
 * 2. 相遇时, walker 走 C-L, runner 走 2(C-L), 此时 walker 离环起点为 L
 * 3. walker 重新从链表起点走, runner 减速前进, 相遇在环起点.
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (head == NULL)return NULL;
        ListNode *walker = head;
        ListNode *runner = head;
        bool isCircle = false;
        while (runner->next && runner->next->next) {
            walker = walker->next;
            runner = runner->next->next;
            if (walker == runner) {
                isCircle = true;
                break;
            }
        }
        if (!isCircle)return NULL;
        walker = head;
        while (walker != runner) {
            walker = walker->next;
            runner = runner->next;
        }
        return runner;
    }
};

// @lc code=end

