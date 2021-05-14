/**
 * Find three numbers that sums up to 0
 * @param  {number[]} nums
 * @returns {[number[]]} array of number arrays
 */
const threeSum = (nums) => {
    // Sort the list so that logic can be used to avoid duplicates
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i += 1) {
        // 0 is the target
        let target = 0 - nums[i];
        // The following check avoids duplicates
        if (i === 0 || nums[i] > nums[i - 1]) {
            let low = i + 1;
            let high = nums.length - 1;
            while (low < high) {
                if (nums[low] + nums[high] === target) {
                    result.push([nums[i], nums[low], nums[high]]);
                    // Avoid duplicates
                    while (nums[low] === nums[low + 1]) {
                        low += 1;
                    }
                    while (nums[high] === nums[high - 1]) {
                        high -= 1;
                    }
                    low += 1;
                    high -= 1;
                } else if (nums[low] + nums[high] > target) {
                    // the array is sorted. Reduce high.
                    // while(nums[high]===nums[high-1]){
                    //     high-=1;
                    // }
                    high -= 1;
                } else {
                    // the array is sorted. Increase low.
                    // while(nums[low]===nums[low+1]){
                    //     low+=1;
                    // }
                    low += 1;
                }
            }
        }
    }
    return result;
};

module.exports = threeSum;