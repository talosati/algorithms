//Count how many candles are tallest.

let candles = [4, 4, 1, 3];

function findMaxHigh(numbers) {
    return numbers.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}

function getCountOfTallestCandles(numbers) {
    let maxHigh = findMaxHigh(numbers);
    return numbers.filter(n => n === maxHigh).length;
}

console.log(getCountOfTallestCandles(candles));


