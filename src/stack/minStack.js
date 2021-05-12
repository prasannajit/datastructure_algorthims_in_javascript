// https://leetcode.com/problems/min-stack/

class Node {
    constructor(value, min) {
        this.value = value;
        this.min = min;
    }
}
/*
** MinStack should provide the minimum element in the stack
** in O(1) operation
*/
class MinStack {
    constructor() {
        this.list = [];
    }
    top() {
        if (this.list.length > 0) {
            return this.list[this.list.length - 1].value;
        }
    }
    push(value) {
        if (this.list.length === 0) {
            this.list.push(new Node(value, value));
        } else {
            let item = this.list[this.list.length - 1];
            if (item.min <= value) {
                this.list.push(new Node(value, item.min));
            } else {
                this.list.push(new Node(value, value));
            }
        }
    }
    pop() {
        if (this.list.length > 0) {
            let item = this.list.pop();
            return item.value;
        }
    }
    getMin() {
        if (this.list.length > 0) {
            return this.list[this.list.length - 1].min;
        }
    }
}

module.exports = MinStack;