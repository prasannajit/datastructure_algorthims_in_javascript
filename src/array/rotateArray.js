/**
 * Rotate an array k time to the right
 * @param  {Array} nums list of items
 * @param  {number} k rotate k times
 */
const rotateArray_1 = (nums, k) => {
    // As rotation can be more than array length,
    // and a full length rotation is same as the array,
    // only the remainder number of rotations is required
    k %= nums.length;
    // keep the last k items to assign later
    let sliced = nums.slice(nums.length - k);
    // index from which shifting starts
    let i = nums.length - k;
    // shift all except the last k items
    for (let i = nums.length - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    // assign the sliced array to beginning of array
    for (let i = 0; i < k; i++) {
        nums[i] = sliced[i];
    }
};

