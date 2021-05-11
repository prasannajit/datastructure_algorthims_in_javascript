/**
 * Return Pascal's triangle with given rows
 * @param  {number} numRows number of rows in the triangle
 * @return {Array} if numRows is 4 it should return [[1],[1,1],[1,2,1],[1,3,3,1]]
 */
const pascalsTriangle = (numRows) => {
    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return [[1], [1, 1]];
    } else {
        let result = [[1], [1, 1]];
        for (let i = 2; i < numRows; i++) {
            let prev=result[i-1];
            let newResult=[1];
            for(let i=0;i<prev.length-1;i++){
                newResult.push(prev[i]+prev[i+1]);
            }
            newResult.push(1);
            result.push(newResult);
        }
        return result;
    }
};

module.exports = pascalsTriangle;