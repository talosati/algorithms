// https://www.hackerrank.com/challenges/mini-max-sum/problem

let myArray = [1, 3, 5, 7, 9];
let myArray2 = [1, 2, 3, 4, 5];

function miniMaxSur(arr) {
    let minMaxSums = [];
    let storeSums = [];
    let sumAll = arr.reduce((partialSum, currentVal) => partialSum + currentVal, 0);
    for (let i = 0; i < arr.length; i++) {
        storeSums.push(sumAll - arr[i]);
    }
    let sortedStoreSums = storeSums.sort(function (a, b) {
        return a - b;
    })
    minMaxSums.push(sortedStoreSums[0], sortedStoreSums[sortedStoreSums.length - 1]);
    return minMaxSums;
}

console.log(miniMaxSur(myArray));
console.log(miniMaxSur(myArray2));
