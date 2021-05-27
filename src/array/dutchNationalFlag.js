// https://leetcode.com/problems/sort-colors/

/**
 * Sorts an array (in place) that has 0,1 and 2.
 * @param  {number[]} arr list of numbers
 * @return {number[]} sorted array
 */
const dutchNationalFlag = (arr) => {
    if(arr.length<=1){
        return arr;
    }
    let zeroPos = 0;
    let twoPos = arr.length - 1;
    let i=0;
    while (i <= twoPos) {
        if (arr[i] === 0) {
            [arr[zeroPos],arr[i]]=[arr[i],arr[zeroPos]];
            zeroPos++;
            while (arr[zeroPos] === 0) {
                zeroPos++;
            }
            i=zeroPos;
        } else if (arr[i] === 2) {
            [arr[twoPos],arr[i]]=[arr[i],arr[twoPos]];
            twoPos--;
            while (arr[twoPos] === 2) {
                twoPos--;
            }
        } else{
            i++;
        }
    }
    return arr;
};

module.exports = dutchNationalFlag;