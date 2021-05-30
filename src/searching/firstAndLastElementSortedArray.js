// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const firstAndLastElementSortedArray = (nums, target) => {
    const search = (nums, target, maxIndex) => {
        let start = 0;
        let index = -1;
        let end = nums.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] > target) {
                end = mid - 1;
            } else if (nums[mid] < target) {
                start = mid + 1;
            }
            if (nums[mid] === target) {
                index = mid;
                if (maxIndex) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }
        return index;
    };

    let result = [-1, -1];
    result[0] = search(nums, target, false);
    result[1] = search(nums, target, true);
    return result;
};

module.exports = firstAndLastElementSortedArray;