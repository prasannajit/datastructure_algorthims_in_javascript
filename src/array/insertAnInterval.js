// https://leetcode.com/problems/insert-interval/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertAnInterval = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }
    const [start, finish] = newInterval;
    let index;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= start) {
            index = i;
            break;
        }
    }
    if (typeof (index) === 'undefined') {
        intervals.push(newInterval);
    } else {
        intervals.splice(index, 0, newInterval);
    }
    return mergeIntervals(intervals);
};

const mergeIntervals = (intervals) => {
    let result = [];
    let [start, finish] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let [begin, end] = intervals[i];
        if (begin <= finish) {
            finish = Math.max(finish, end);
        } else {
            result.push([start, finish]);
            start = begin;
            finish = end;
        }
    }
    result.push([start, finish]);
    return result;
};

module.exports = insertAnInterval;