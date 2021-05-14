// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Adds two numbers written in reverse order
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} sum of two numbers represented by l1 and l2
 */
const addTwoNumbers = (l1, l2) => {
    let l3 = new ListNode();
    let temp = l3;
    let carryOver = 0;
    while (l1 || l2) {
        let sum = carryOver;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        temp.next = new ListNode(sum % 10);
        carryOver = Math.floor(sum / 10);
        temp = temp.next;
    }
    if (carryOver > 0) {
        temp.next = new ListNode(carryOver);
    }
    return l3.next;
};

module.exports = addTwoNumbers;