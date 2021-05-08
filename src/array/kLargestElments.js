const { MinHeap } = require('../heap');
/**
 * Returns the max k elements in the list
 * @param  {Array} arr list of numbers
 * @param  {number} k
 * @return {Array} array of max k elements
 */
const kLargestElements = (arr, k) => {
    const minHeap = new MinHeap();

    for (let i = 0; i < arr.length; i++) {
        minHeap.offer(arr[i]);
        if (minHeap.size > k) {
            minHeap.poll();
        }
    }
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(minHeap.poll());
    }
    return result.reverse();
}

module.exports = kLargestElements;