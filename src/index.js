const { reverse: { reverse_1, reverse_2, reverse_3 } } = require('./string');
const { binarySearch: { binarySearch_1, binarySearch_2 } } = require('./searching');
const { quickSort } = require('./sorting');
const { MinHeap } = require('./heap');
const { kLargestElements } = require('./array');

let startTime, endTime;
// string section - starts

// reverse a string -- starts
// startTime = process.hrtime.bigint();
// console.log(reverse_1('abcdefghijklmno'));
// endTime = process.hrtime.bigint();
// console.log(`Time taken by reverse_1 method is ${(endTime - startTime) / 1000000n} ms`)
// startTime = process.hrtime.bigint();
// console.log(reverse_2('abcdefghijklmno'));
// endTime = process.hrtime.bigint();
// console.log(`Time taken by reverse_2 method is ${(endTime - startTime) / 1000000n} ms`)
// startTime = process.hrtime.bigint();
// console.log(reverse_3('abcdefghijklmno'));
// endTime = process.hrtime.bigint();
// console.log(`Time taken for reverse_3 method is ${(endTime - startTime) / 1000000n} ms`)

// console.log(reverse_1('abcd'));
// console.log(reverse_1('ab'));
// console.log(reverse_1('a'));
// reverse a string -- ends

// string section - ends

// search section - starts

// binary search -- starts
// console.log(binarySearch_1([1, 5, 9, 23, 45, 67, 119, 232, 446, 767, 899, 1023, 1234], 9));
// console.log(binarySearch_1([1, 5, 9, 23, 45, 67, 119, 232, 446], 446));
// console.log(binarySearch_1([1, 5, 9, 23, 45, 67, 119, 232, 446], 100));
// console.log(binarySearch_1([1], 1));
// binary search -- ends

// search section - ends

// sorting section - starts

// quick sort - starts
// const arr = [29, 12, 90, 22, 23, 45, 1, 2, 78, 2];
// quickSort(arr);
// console.log(arr);
// quick sort - ends

// sorting section - ends

// heap section - starts

// Min heap - starts
// const minHeap = new MinHeap();
// minHeap.offer(12);
// minHeap.offer(2);
// minHeap.offer(14);
// minHeap.offer(23);
// minHeap.offer(11);
// minHeap.offer(8);
// minHeap.offer(35);
// console.log(`Size of heap is ${minHeap.size}`);
// console.log(`Min item is ${minHeap.peek()}`);
// minHeap.poll();
// console.log(`Min item is ${minHeap.peek()}`);
// minHeap.poll();
// console.log(`Min item is ${minHeap.peek()}`);
// minHeap.poll();
// console.log(`Min item is ${minHeap.peek()}`);
// minHeap.poll();
// console.log(`Min item is ${minHeap.peek()}`);
// minHeap.poll();
// console.log(`Min item is ${minHeap.peek()}`);
// minHeap.poll();
// console.log(`Min item is ${minHeap.peek()}`);
// minHeap.poll();
// console.log(`Min item is ${minHeap.peek()}`);
// console.log(`Size of heap is ${minHeap.size}`);
// Min heap - ends

// heap section - ends

// Array section - starts

// Find K largest elements in an array - starts
console.log(kLargestElements([1,29,3,45,78,7,13,47,11,73],4));
// Find K largest elements in an array - ends

// Array section - ends