/**
 * Find the missing number in the range [0,n] where 
 * n is equal to input array's length
 * @param  {Array} nums input array of numbers
 * @return {number} missing number in the range [0,n]
 */
const missingNumber = (nums) => {
    let sum = (nums.length * (nums.length + 1)) / 2;
    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i];
    }
    return sum;
};

module.exports = missingNumber;