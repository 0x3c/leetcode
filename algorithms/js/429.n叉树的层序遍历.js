/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];
  const res = [];
  const queue = [[root]];
  while (queue.length) {
    const tasks = queue.shift();
    const ans = [];
    const nextTask = [];
    for (let task of tasks) {
      ans.push(task.val);
      nextTask.push(...task.children);
    }
    res.push(ans);
    nextTask.length && queue.push(nextTask);
  }
  return res;
};
// @lc code=end
