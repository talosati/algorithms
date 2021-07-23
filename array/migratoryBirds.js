// https://www.hackerrank.com/challenges/migratory-birds/problem

let myArray = [1, 1, 2, 2, 3];
let myArray2 = [1, 4, 4, 4, 5, 3];
let myArray3 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
    let hits = {};
    arr.forEach(currentValue => {
        if (!hits.hasOwnProperty(currentValue)) {
            hits[currentValue] = 0;
        }
        hits[currentValue]++;
    });
    console.log(hits);
    return hits;
}

function order(unordered) {
    return Object
        .keys(unordered)
        .sort(function (a, b) {
            return unordered[b] - unordered[a];
        })[0];
}

console.log(order(migratoryBirds(myArray)));
console.log(order(migratoryBirds(myArray2)));
console.log(order(migratoryBirds(myArray3)));
