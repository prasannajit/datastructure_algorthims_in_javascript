// https://leetcode.com/problems/find-all-duplicates-in-an-array/
/**
 * Find duplicates in an array that contains numbers [1,n]
 * where n is the length of array
 * @param  {number[]} arr array of numbers [1,n]
 * @returns {number[]} list of duplicate numbers
 */
const findDuplicates = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let index = Math.abs(arr[i]) - 1;
        if (arr[index] < 0) {
            result.push(Math.abs(index)+1);
        }
        arr[index] = -arr[index];
    }
    return result;
};

module.exports = findDuplicates;