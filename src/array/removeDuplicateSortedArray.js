// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * Removes duplicate from sorted array and returns the length of non duplicated part
 * Does it in O(1) without extra spaces
 * @param  {number[]} arr
 * @return {number} length of array till non-duplicated part
 */
const removeDuplicateSortedArray = (arr) => {
    let position = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[position + 1] = arr[i];
            position++;
        }
    }
    return position + 1;
};

module.exports = removeDuplicateSortedArray;