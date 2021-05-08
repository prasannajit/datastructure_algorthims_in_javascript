/**
 * Sorts the input array
 * @param  {Array} arr array to be sorted
 * @param  {number} start=0 start index, not required, default initialized
 * @param  {number} end=arr.length-1 end index, not required, default initialized
 */
const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) {
        return;
    }
    // Choose the first element as pivot, any element can be chosen as pivot
    // randomly choosing a pivot will have the time complexity if O(nlogn) worst case
    let pivot = arr[start];

    // partition the elements, so that all elements less than pivot will be on the left side
    // of pivot and element greater than pivot at the right side
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] <= pivot) {
            swapIndex += 1;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    // Swap the pivot element with element at swap index (element at swap index is less than or equal to pivot) 
    // Quicks sort is not stable as it does not care about the ordering of elements
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    
    // space complexity is O(logn) because of stack space
    // Apply same algorithm to left side
    quickSort(arr, start, swapIndex - 1);

    // Apply same algorithm to right side
    quickSort(arr, swapIndex + 1, end);
};

module.exports = quickSort;