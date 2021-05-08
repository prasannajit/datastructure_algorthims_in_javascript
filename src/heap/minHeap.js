/**
 * Min binary heap implementation using array.
 * The minimum element is always at the root.
 * This can be used a min-priority-queue.
 */
const MinHeap = function () {
    this.list = [];
}
/** 
* Returns the size of the heap.
*/
Object.defineProperty(MinHeap.prototype, 'size', {
    configurable: false,
    enumerable: true,
    get() {
        return this.list.length;
    }
});
/**
 * Inserts an element into the heap.
 * @param  {number} item
 */
MinHeap.prototype.offer = function (item) {
    this.list.push(item);
    if (this.list.length === 1) {
        return;
    }
    else {
        this._heapifyUp();
    }
};
/**
 * Returns the minimum value(root) in the heap.
 */
MinHeap.prototype.peek = function () {
    if (this.list.length > 0) {
        return this.list[0];
    }
};
/**
 * Deletes the root of the heap and returns the element present at root.
 */
MinHeap.prototype.poll = function () {
    if (this.list.length === 0) {
        return;
    } else if (this.list.length === 1) {
        let item = this.list.shift();
        return item;
    } else if (this.list.length === 2) {
        let item = this.list.shift();
        return item;
    } else {
        let item = this.list[0];
        let lastItem = this.list.pop();
        this.list[0] = lastItem;
        this._heapifyDown();
        return item;
    }
};

/**
 * Moves the last element in the list to its right position.
 */
MinHeap.prototype._heapifyUp = function () {
    let index = this.list.length - 1;
    while (true) {
        let parent = this._parent(index);
        if (typeof parent === 'undefined') {
            break;
        } else {
            if (this.list[index] < this.list[parent]) {
                // swap
                [this.list[index], this.list[parent]] = [this.list[parent], this.list[index]];
                index = parent;
            } else {
                break;
            }
        }
    }
};

/**
 * Removes the first element. Brings the last element to front. 
 * Then place it in its right position.
 */
MinHeap.prototype._heapifyDown = function () {
    let index = 0;
    while (true) {
        let children = this._children(index);
        if (typeof children === 'undefined') {
            break;
        } else {
            let [left, right] = children;
            let minIndex = index;
            if (left && this.list[left] < this.list[minIndex]) {
                minIndex = left;
            }
            if (right && this.list[right] < this.list[minIndex]) {
                minIndex = right;
            }
            if (minIndex !== index) {
                //swap
                [this.list[minIndex], this.list[index]] = [this.list[index], this.list[minIndex]];
                index = minIndex;
            } else {
                break;
            }
        }
    }
};

/**
 * Returns the parent of the provided index in the tree.
 * @param  {number} index position of the element 
 */
MinHeap.prototype._parent = function (index) {
    if (index <= 0) {
        return;
    } else {
        return Math.floor((index - 1) / 2);
    }
};
/**
 * Returns the children of the provided index in the tree.
 * @param  {number} index index position of the element 
 */
MinHeap.prototype._children = function (index) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let children = [];
    if (leftChild < this.list.length) {
        children.push(leftChild);
    }
    if (rightChild < this.list.length) {
        children.push(rightChild);
    }
    if (children.length > 0) {
        return children;
    }
    return;
}

module.exports = MinHeap;