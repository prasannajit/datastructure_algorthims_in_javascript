// https://leetcode.com/problems/max-consecutive-ones-iii/

const maxConsecutive1sAfterK0sReplacement = (nums, k) => {
    let start = 0;
    let maxLength = Number.NEGATIVE_INFINITY;
    let oneCount = 0;
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 1) {
            oneCount += 1;
        }
        while (end - start + 1 - oneCount > k) {
            if (nums[start] === 1) {
                oneCount--;
            }
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};

module.exports = maxConsecutive1sAfterK0sReplacement;