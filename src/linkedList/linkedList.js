class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtPosition() {

    }

    deleteAtPosition() {

    }

    insertEnd(item) {
        if (this.head) {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = new Node(item);
        } else {
            this.head = new Node(item);
        }
    }

    insertBeginning(item) {
        let node = new Node(item, this.head);
        this.head = node;
    }

    deleteEnd() {
        if (this.head) {
            let prev = this.head;
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
        }
        prev.next = null;
    }

    deleteBeginning() {
        this.head = this.head.next;
    }

    searchItem(searchItem) {
        let node = this.head;
        while (node) {
            if (node.val === searchItem) {
                return node;
            }
            node = node.next;
        }
    }

    getElementAtPosition(pos) {
        let counter = 1;
        let node = this.head;
        while (true) {
            if (counter > pos) {
                return node;
            }
            if (node.next) {
                node = node.next;
            } else {
                return;
            }
            counter++;
        }
    }

    reverse() {
        let current = this.head;
        let next = this.head;
        let prev = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        // Change head
        this.head = prev;
    }

    print() {
        let node=this.head;
        while(node){
            console.log(`Item is ${node.val}`);
            node=node.next;
        }
    }
}

module.exports = LinkedList;