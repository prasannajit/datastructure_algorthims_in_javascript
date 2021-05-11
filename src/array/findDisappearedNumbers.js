/**
 * Find disappeared numbers in the range of [1,n]
 * @param  {Array} nums input array
 * @return {Array} array of missing numbers
 */
const findDisappearedNumbers = (nums) => {
    let items = Array.from({ length: nums.length }, () => 0);
    for (let i = 0; i < nums.length; i++) {
        items[nums[i] - 1] = 1;
    }
    let result = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] === 0) {
            result.push(i + 1);
        }
    }
    return result;
};

module.exports = findDisappearedNumbers;