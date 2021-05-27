// https://leetcode.com/problems/squares-of-a-sorted-array/
/**
 * Square all the elements of a sorted array,
 * the result array should also be sorted (contains negative numbers)
 * @param  {number[]} arr
 * @return {number []}
 */
const squaringSortedArray = (arr) => {
    let squares = Array.from({ length: arr.length }, () => 0);
    let left = 0, right = arr.length - 1;
    let fillPosition = arr.length - 1;

    while (left <= right) {
        let absLeft = Math.abs(arr[left]);
        let absRight = Math.abs(arr[right]);
        if (left === right) {
            squares[fillPosition] = arr[left];
        }
        if (absLeft > absRight) {
            left++;
            squares[fillPosition] = absLeft ** 2;
        } else {
            right--;
            squares[fillPosition] = absRight ** 2;
        }
        fillPosition--;
    }
    return squares;
};

module.exports = squaringSortedArray;