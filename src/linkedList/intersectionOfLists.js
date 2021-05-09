/**
 * Finds intersection node of two linked lists and returns the node,
 * if not found returns null. This solutions uses a map to keep track of visited nodes.
 * @param  {LinkedList} ll1 head of list1
 * @param  {LinkedList} ll2 head of list2
 * @return {LinkedList} intersection node or null
 */
const intersectionOfLists_1 = (ll1, ll2) => {
    if (!ll1 || !ll2) {
        return null;
    }
    let map = new Map();
    let node = ll1;
    while (node) {
        map.set(node, true);
        node = node.next;
    }
    node = ll2;
    while (node) {
        if (map.has(node)) {
            return node;
        }
        node = node.next;
    }
    return null;
};

/**
 * This solutions calculates both the list lengths.
 * If there is a difference, then move a pointer from head to the diff count
 * of the longest list.
 */
const intersectionOfLists_2 = (ll1, ll2) => {
    if (!ll1 || !ll2) {
        return null;
    }
    let node = ll1;
    let length1 = 0;
    while (node) {
        node = node.next;
        length1++;
    }
    node = ll2;
    let length2 = 0;
    while (node) {
        node = node.next;
        length2++;
    }
    if (length1 > length2) {
        let diff = length1 - length2;
        let counter = 0;
        let node1 = ll1;
        while (counter < diff) {
            node1 = node1.next;
            counter++;
        }
        let node2 = ll2;
        while (node1) {
            if (node1 === node2) {
                return node1;
            }
            node1 = node1.next;
            node2 = node2.next;
        }
    } else if (length1 < length2) {
        let diff = length2 - length1;
        let counter = 0;
        let node2 = ll2;
        while (counter < diff) {
            node2 = node2.next;
            counter++;
        }
        let node1 = ll1;
        while (node2) {
            if (node1 === node2) {
                return node2;
            }
            node1 = node1.next;
            node2 = node2.next;
        }
    } else {
        let node1 = ll1;
        let node2 = ll2;
        while (node1) {
            if (node1 === node2) {
                return node2;
            }
            node1 = node1.next;
            node2 = node2.next;
        }
    }
    return null;
};

/**
 * Have two pointers pointing to both heads.
 * Whichever is shorter the pointer will soon reach the last node.
 * Point it to other lists head. When the longer list pointer points to last,
 * switch it to other head. This way, they will be equidistant from last node
 * of each lists.
 */
const intersectionOfLists_3 = (ll1, ll2) => {
    if (!ll1 || !ll2) {
        return null;
    }
    let node1 = ll1;
    let node2 = ll2;
    while (true) {
        if (node1 === node2) {
            return node1;
        }
        node1 = node1.next;
        node2 = node2.next;
        if (node1 === node2) {
            return node1;
        }
        if (!node1) {
            node1 = ll2;
        }
        if (!node2) {
            node2 = ll1;
        }
    }

    // Another format 
    // if (!ll1 || !ll2) {
    //     return null;
    // }
    // let node1 = ll1;
    // let node2 = ll2;
    // while (node1 !== node2) {
    //     node1 = node1.next;
    //     node2 = node2.next;
    //     if (node1 === node2) {
    //         return node1;
    //     }
    //     if (!node1) {
    //         node1 = ll2;
    //     }
    //     if (!node2) {
    //         node2 = ll1;
    //     }
    // }
    // return node1;
};

module.exports = { intersectionOfLists_1, intersectionOfLists_2, intersectionOfLists_3 };