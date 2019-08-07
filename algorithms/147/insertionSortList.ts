/*
 * @Author: Samuel Chia
 * @Date: 2019-08-07 15:02:05
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2019-08-07 17:18:45
 */

interface IListNode<T> {
  val: T;
  next: IListNode<T>;
}

class ListNode implements IListNode<number> {
  public val: number;
  public next: IListNode<number>;
  constructor(val: number, next: IListNode<number> = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export const insertionSortList = (head: ListNode): ListNode => {
  const beforeHead = new ListNode(-Number.MAX_VALUE);
  while (head) {
    let prev = beforeHead;
    while (prev.next && prev.next.val < head.val) {
      prev = prev.next;
    }
    const tmp = head.next;
    head.next = prev.next;
    prev.next = head;

    head = tmp;
  }
  return beforeHead.next;
};
