const happyNumber = (num) => {
    const findSumOfDigitsSquare = (num) => {
        let sum = 0;
        while (num != 0) {
            let rem = num % 10;
            sum += rem ** 2;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let slow = num;
    let fast = num;
    while (true) {
        fast = findSumOfDigitsSquare(fast);
        fast = findSumOfDigitsSquare(fast);
        slow = findSumOfDigitsSquare(slow);
        if (fast === slow) {
            if (fast === 1) {
                return true;
            }
            return false;
        }
    }
};

module.exports = happyNumber;