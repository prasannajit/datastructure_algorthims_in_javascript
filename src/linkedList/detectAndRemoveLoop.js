/**
 * Detects if there is a cycle in a linked list. Remove the cycle.
 * Returns true if there is a cycle, otherwise false.
 * This solution uses a map to keep track of visited nodes.
 * @param  {LinkedList} head head of a linked list
 * @return {boolean} true if there is a cycle, otherwise false
 */
const detectAndRemoveLoop_1 = (head) => {
    if (!head || !head.next) {
        return false;
    }
    let map = new Map();
    let node = head;
    let prev = null;
    while (node) {
        if (map.has(node)) {
            prev.next = null;
            return true;
        } else {
            map.set(node, true);
        }
        prev = node;
        node = node.next;
    }
    return false;
};

/**
 * This algorithm uses floyds algorithm to find the loop node.
 */
const detectAndRemoveLoop_1 = (head) => {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head;
    let isThereALoop = false;
    while (true) {
        if (slow.next) {
            slow = slow.next;
        } else {
            break;
        }
        if (fast.next && fast.next.next) {
            fast = fast.next.next;
        } else {
            break;
        }
        if (slow === fast) {
            isThereALoop = true;
            break;
        }
    }
    if (isThereALoop) {
        slow = head;
        let prev = fast;
        while (slow !== fast) {
            prev = fast;
            slow = slow.next;
            fast = fast.next
        }
        prev.next = null;
    }
    return isThereALoop;
}

module.exports = { detectAndRemoveLoop_1, detectAndRemoveLoop_1 };