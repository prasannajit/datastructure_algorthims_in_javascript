/**
 * Finds the indexes of two numbers in an array, where the sum
 * is equal to target.
 * @param  {Array} arr list of numbers
 * @param  {number} target target sum
 * @return {Array} array of indexes or undefined
 */
const twoSum_1 = (arr, target) => {
    // time complexity O(n2), space complexity O(1)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return;
};
/**
 * Solves the two sum problem using hashmap
 */
const twoSum_2 = (arr, target) => {
    // time complexity O(n), space complexity O(n)
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let otherPart = target - arr[i];
        if (map.has(otherPart)) {
            return [map.get(otherPart), i ]
        } else {
            map.set(arr[i], i);
        }
    }
    return;
};

module.exports = { twoSum_1, twoSum_2 };

