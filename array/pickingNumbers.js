// https://www.hackerrank.com/challenges/picking-numbers/problem

let myArray = [1, 1, 2, 2, 4, 4, 5, 5, 5];
let myArray2 = [4, 6, 5, 3, 3, 1];
let myArray3 = [1, 2, 2, 3, 1, 2];

function pickingNumbers(a) {
    let best = 1;
    let bestLower = 1;
    let bestHigher = 1;

    let sortedArray = a.sort(function (a, b) {
        return a - b;
    });

    for (let i=1; i<sortedArray.length; i++){
        if (sortedArray[i] == sortedArray[i-1]){
            bestLower = bestLower + 1;
            bestHigher = bestHigher + 1;

        } else if (sortedArray[i] - 1 == sortedArray[i-1]){
            bestLower = 1 + bestHigher;
            bestHigher = 1;

        } else if (sortedArray[i] + 1 == sortedArray[i-1]){
            bestHigher = 1 + bestLower;
            bestLower = 1;

        } else {
            bestLower = 1;
            bestHigher = 1;
        }

        best = Math.max(best, bestLower, bestHigher);
    }
    return best;
}

console.log(pickingNumbers(myArray));
console.log(pickingNumbers(myArray2));
console.log(pickingNumbers(myArray3));

