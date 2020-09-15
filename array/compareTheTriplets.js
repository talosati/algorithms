//  https://www.hackerrank.com/challenges/compare-the-triplets/problem

let alice = [1, 2, 3];
let bob = [3, 2, 1];

let alice2 = [5, 6, 7];
let bob2 = [3, 6, 10];

let alice3 = [17, 28, 30];
let bob3 = [99, 16, 8];

function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints++;
        } else if (b[i] > a[i]) {
            bobPoints++;
        }
    }
    result.push(alicePoints, bobPoints);
    return result;
}

console.log(compareTriplets(alice, bob));
console.log(compareTriplets(alice2, bob2));
console.log(compareTriplets(alice3, bob3));
