const {
    reverse: { reverse_1, reverse_2, reverse_3 },
    validAnagram: { validAnagram_1,validAnagram_2 },
    isValidPallindrome,
} = require('./string');
const { binarySearch: { binarySearch_1, binarySearch_2 } } = require('./searching');
const { quickSort } = require('./sorting');
const { MinHeap } = require('./heap');
const {
    kLargestElements,
    moveZerosToEnd: { moveZerosToEnd_1, moveZerosToEnd_2 },
    twoSum: { twoSum_1, twoSum_2 },
    fizzBuzz,
} = require('./array');
const { sortedArrayToBST, BinarySearchTree } = require('./tree');
const { LinkedList } = require('./linkedList');

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

// valid anagram -- starts
// console.log(`${validAnagram_2('abc', 'cba')}`);
// valid anagram -- ends

// is valid pallindrome -- starts
console.log(`${isValidPallindrome('ab_a')}`);
// is valid pallindrome  -- ends

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

//FizzBuzz- starts
// console.log(fizzBuzz([1,3,5,15,23,17,12]));
//FizzBuzz- ends

// Find K largest elements in an array - starts
// console.log(kLargestElements([1, 29, 3, 45, 78, 7, 13, 47, 11, 73], 4));
// Find K largest elements in an array - ends

// Move all 0's to end keeping the other elements' relative order intact - starts
// let arr = [1, 0, 4, 5, 0, 0, 9, 0, 8, 7, 65, 0];
// console.log(`Before zeros are moved ${arr}`);
// moveZerosToEnd_1(arr)
// console.log(`After zeros are moved ${arr}`);
// arr = [1, 0, 4, 5, 0, 0, 9, 0, 8, 7, 65, 0];
// console.log(`Before zeros are moved ${arr}`);
// moveZerosToEnd_2(arr);
// console.log(`After zeros are moved ${arr}`);
// Move all 0's to end keeping the other elements' relative order intact - ends

// Two sum - starts
// console.log(twoSum_1([1, 9, 3, 2, 7, 14, 23, 11], 32));
// console.log(twoSum_1([1, 9, 3, 2, 7, 14, 23, 11], 33));
// console.log(twoSum_2([1, 9, 3, 2, 7, 14, 23, 11], 32));
// console.log(twoSum_2([1, 9, 3, 2, 7, 14, 23, 11], 33));
// Two sum - ends

// Array section - ends

// LinkedList section - starts

// Basic linkedlist usage - starts
// const ll1 = new LinkedList();
// ll1.insertEnd(12);
// ll1.insertEnd(23);
// ll1.insertEnd(28);
// ll1.insertEnd(10);
// ll1.insertEnd(9);
// ll1.insertEnd(17);
// ll1.print();
// Basic linkedlist usage - ends

// LinkedList section - ends

// Tree section - starts

// Convert sorted array to BST - starts
// sortedArrayToBST([1,2,3,4,5,6,7,8]);
// Convert sorted array to BST - ends

// Binary tree in order traversal - starts
// const bst=new BinarySearchTree();
// bst.add(10);
// bst.add(8);
// bst.add(9);
// bst.add(6);
// bst.add(5);
// bst.add(4);
// bst.add(20);
// bst.add(15);
// bst.add(23);
// bst.add(17);
// bst.add(27);
// bst.inOrderTraversal();
// Binary tree in order traversal - ends
// Tree section - ends