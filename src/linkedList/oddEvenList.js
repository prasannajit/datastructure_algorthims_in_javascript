// https://leetcode.com/problems/odd-even-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Moves all even positioned nodes to the end of odd nodes,
 * keeps the relative order of nodes in tact
 * @param {ListNode} head
 * @return {ListNode} head of the rearranged list
 */
const oddEvenList = (head) => {
    if (!head || !head.next || !head.next.next) {
        return head;
    }
    // save the even head for later concatenation
    let evenHead = head.next;
    // odd and even starting points
    let odd = head;
    let even = head.next;
    while (true) {
        odd.next = even.next;
        odd = even.next;
        even.next = even.next.next;
        even = even.next;
        if (!even || !even.next) {
            break;
        }
    }
    // concat
    odd.next = evenHead;
    return head;
};

module.exports = oddEvenList;