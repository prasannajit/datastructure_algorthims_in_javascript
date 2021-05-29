/**
 * Finds the target in list of numbers. Returns index if found, otherwise -1.
 * The list may be sorted in ascending or descending order.
 * @param  {number[]} nums array of numbers
 * @param  {number} target
 */
const orderAgnosticBinarySearch = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let isAscending = false;
    if (nums[left] < nums[right]) {
        isAscending = true;
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (isAscending) {
            if (target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target > nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};

module.exports = orderAgnosticBinarySearch;