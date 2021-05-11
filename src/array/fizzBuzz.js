const fizzBuzz = (arr) => {
    let result = [];
    let list = [[15, "FizzBuzz"], [5, "Buzz"], [3, "Fizz"]];
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < list.length; j++) {
            [key, val] = list[j];
            if (arr[i] % key === 0) {
                result.push(val);
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arr[i]);
        }
    }
    return result;
};

module.exports = fizzBuzz;