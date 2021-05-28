const {
    reverse: { reverse_1, reverse_2, reverse_3 },
    validAnagram: { validAnagram_1, validAnagram_2 },
    isValidPallindrome,
    lengthOfLongestSubstringNoRepChar,
    minWindowSubstring,
    longestSubstWithKDistinctChars,
    longestSubstringAfterReplacement,
} = require('./string');
const {
    binarySearch: { binarySearch_1, binarySearch_2 },
    findAnagramsOfPattern,
    searchPermutationOfString
} = require('./searching');
const { quickSort } = require('./sorting');
const { MinHeap } = require('./heap');
const {
    kLargestElements,
    moveZerosToEnd: { moveZerosToEnd_1, moveZerosToEnd_2 },
    twoSum: { twoSum_1, twoSum_2 },
    fizzBuzz,
    averageOfKNumbers,
    maxSumSubArraySizeK,
    removeDuplicateSortedArray,
    dutchNationalFlag,
    smallestSubarrayOfSumS: { smallestSubarrayOfSumS_1, smallestSubarrayOfSumS_2 },
    quadrupleSumToTarget,
} = require('./array');
const { sortedArrayToBST, BinarySearchTree } = require('./tree');
const { LinkedList } = require('./linkedList');
const { fibonacci } = require('./misc');
const { Graph, WeightedGraph } = require('./graph');

let startTime, endTime;

// Graph section - starts
{
    // Basic graph -- starts
    // let g = new Graph();
    // g.addVertex('A');
    // g.addVertex('B');
    // g.addVertex('C');
    // g.addEdge('A', 'B', false);
    // g.addEdge('A', 'C', false);
    // g.addEdge('B', 'C', false);
    // g.removeEdge('B','C',false);
    // g.removeVertex('A');
    // g.removeVertex('B');
    // console.log(g.depthFirstTraversalRecursive('A'));
    //g.breadthFirstTraversal('A');
    //console.log(g);
    // Basic graph -- ends

    // weighted graph -- starts
    // const wg= new WeightedGraph();
    // wg.addVertex('A');
    // wg.addVertex('B');
    // wg.addVertex('C');
    // wg.addVertex('D');
    // wg.addVertex('E');
    // wg.addVertex('F');
    // wg.addEdge('A','B',4);
    // wg.addEdge('A','C',2);
    // wg.addEdge('B','E',3);
    // wg.addEdge('C','D',2);
    // wg.addEdge('C','F',4);
    // wg.addEdge('D','E',3);
    // wg.addEdge('D','F',1);
    // wg.addEdge('E','F',1);
    // console.log(wg.shortestPath('A','E'));
    // weighted graph -- ends

    // Graph section - ends
}
// string section - starts
{
    // longest substring with k distinct characters -- starts
    {
        // console.log(longestSubstWithKDistinctChars("araaci", 2));
        // longest substring with k distinct characters -- ends
    }

    // length of longest substring with no repeating characters -- starts
    {
        // console.log(lengthOfLongestSubstringNoRepChar("abbba"));
        // console.log(lengthOfLongestSubstringNoRepChar("abcabcbb"));
        // length of longest substring with no repeating characters -- ends
    }

    // longestSubstringAfterReplacement -- starts
    {
        console.log(longestSubstringAfterReplacement("ABAB",2));
        // longestSubstringAfterReplacement -- ends
    }
    // minWindowSubstring -- starts
    // console.log(minWindowSubstring("ADOBECODEBANC","ABC"));
    // minWindowSubstring -- ends

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
    // console.log(`${isValidPallindrome('ab_a')}`);
    // is valid pallindrome  -- ends

    // string section - ends
}
// search section - starts
{
    // binary search -- starts
    // console.log(binarySearch_1([1, 5, 9, 23, 45, 67, 119, 232, 446, 767, 899, 1023, 1234], 9));
    // console.log(binarySearch_1([1, 5, 9, 23, 45, 67, 119, 232, 446], 446));
    // console.log(binarySearch_1([1, 5, 9, 23, 45, 67, 119, 232, 446], 100));
    // console.log(binarySearch_1([1], 1));
    // binary search -- ends

    // search permutation of string in another string -- starts
    {
        // console.log(searchPermutationOfString('aaacb','abc'));
        // search permutation of string in another string -- ends
    }
    // string anagrams search -- starts
    {
        // console.log(findAnagramsOfPattern('ppqp', 'pq'));
        // string anagrams search -- ends
    }
    // search section - ends
}
// sorting section - starts
{
    // quick sort - starts
    // const arr = [29, 12, 90, 22, 23, 45, 1, 2, 78, 2];
    // quickSort(arr);
    // console.log(arr);
    // quick sort - ends

    // sorting section - ends
}
// heap section - starts
{
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
}
// Array section - starts
{
    // Dutch national flag problem -- starts
    {
        // console.log(dutchNationalFlag([1, 0, 2, 1, 0]));
        // Dutch national flag problem -- ends
    }
    // quadruple sum -- starts
    {
        // console.log(quadrupleSumToTarget([4, 1, 2, -1, 1, -3],1));
        // quadruple sum -- ends
    }
    // remove duplicates from sorted array -- starts
    {
        // console.log(removeDuplicateSortedArray([1,1,2]));
        // remove duplicates from sorted array -- ends
    }
    // Average of K numbers -- starts
    {
        // console.log(averageOfKNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14],5));
        // Average of K numbers -- ends
    }

    // Max sum of subarray of size k -- starts
    {
        // console.log(maxSumSubArraySizeK([2, 1, 5, 1, 3, 2],3));
        // console.log(maxSumSubArraySizeK([2, 3, 4, 1, 5],2));
        // Max sum of subarray of size k -- ends
    }

    // length of minimum subarray of size S or more -- starts
    {
        // console.log(smallestSubarrayOfSumS_2([3, 4, 1, 1, 6],7));
        // length of minimum subarray of size S or more -- ends
    }
    // FizzBuzz- starts
    // console.log(fizzBuzz([1,3,5,15,23,17,12]));
    // FizzBuzz- ends

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
}
// LinkedList section - starts
{
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
}
// Tree section - starts
{
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
}
// Misc section - starts
{
    // fibonacci -- starts
    // console.log(fibonacci(80));
    // fibonacci -- ends

    // Misc section - ends
}