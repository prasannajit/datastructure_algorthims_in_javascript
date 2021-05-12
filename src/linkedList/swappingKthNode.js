// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Swaps kth node from beginning with kth node from end.
 * The head is considered 1st node.
 * @param  {ListNode} head
 */
const swappingKthNode = (head) => {
    let temp = head;
    for (let i = 1; i < k; i++) {
        temp = temp.next;
    }
    let kthFromHead = temp;
    let start = head;
    // when temp reaches end, start will be pointing
    // at kth node from end
    while (temp.next != null) {
        start = start.next;
        temp = temp.next;
    }
    [kthFromHead.val, start.val] = [start.val, kthFromHead.val];
    return head;
}