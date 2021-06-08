// https://leetcode.com/problems/merge-intervals/

const mergeIntervals = (intervals) => {
    // sorting is required, so that the smallest start interval
    // is at the beginning
    intervals.sort((a, b) => a[0] - b[0]);
    let [start, end] = intervals[0];
    let result = [];
    for (let i = 1; i < intervals.length; i++) {
        let [start1, end1] = intervals[i];
        if (start1 <= end) {
            // can be merged
            end=Math.max(end,end1);
        } else{
            // no overlap
            result.push([start,end]);
            start=start1;
            end=end1;
        }
    }
    result.push([start,end]);
    return result;
};

module.exports = mergeIntervals;