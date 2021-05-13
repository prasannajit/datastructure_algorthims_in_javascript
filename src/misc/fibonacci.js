/**
 * Returns the nth fibonacci number.
 * Uses memoization technique to reduce the time complexity
 * @param  {} n
 */
const fibonacci = (n, map = null) => {
    if (!map) {
        map = new Map();
    }
    if (n < 1) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1;
    } else {
        let result1;
        let result2;
        if (map.has(n - 1)) {
            result1 = map.get(n - 1);
        } else {
            result1 = fibonacci(n - 1, map);
            map.set(n - 1, result1);
        }
        if (map.has(n - 2)) {
            result2 = map.get(n - 2);
        } else {
            result2 = fibonacci(n - 2, map);
            map.set(n - 2, result2);
        }
        return result1 + result2;
    }
};

module.exports = fibonacci;