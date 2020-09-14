let array = [24, 29, 70, 43, 12, 27, 29, 24, 41, 12, 41, 43, 24, 70, 24, 100, 41, 43, 43, 100, 29, 70,
    100, 43, 41, 27, 70, 70, 59, 41, 24, 24, 29, 43, 24, 27, 70, 24, 27, 70, 24, 70, 27, 24, 43, 27,
    100, 41, 12, 70, 43, 70, 62, 12, 59, 29, 62, 41, 100, 43, 43, 59, 59, 70, 12, 27, 43, 43, 27, 27,
    27, 24, 43, 43, 62, 43, 70, 29];

let arr2 = [46, 80, 18, 26, 60, 66, 24, 21, 60, 18, 14, 34, 72, 69, 14, 8, 13, 24, 14, 81, 81, 24, 81, 21, 60,
    34, 18, 44, 81, 8, 80, 75, 100, 74, 100, 28, 100, 82, 81, 80, 13, 96, 69, 11, 11, 24, 60, 3, 14, 13, 74, 96,
    81, 8, 100, 28, 43, 60, 44, 8, 21, 11, 80, 3, 69, 4, 80, 28, 81, 11, 66];

function countFrequency(numbers) {
    let hits = {};
    numbers.forEach(currentValue => {
        if (!hits.hasOwnProperty(currentValue)) {
            hits[currentValue] = 0;
        }
        hits[currentValue]++;
    });
    return hits;
}

function orderByFrequency(unordered) {
    return Object
        .keys(unordered)
        .sort(function (a, b) {
            return unordered[b] - unordered[a];
        })[0];
}

function equalizeArray(arr) {
    let highestDuplicates = orderByFrequency(countFrequency(arr))
    return arr.filter(n => !highestDuplicates.includes(n)).length;
}

console.log(equalizeArray(array));
console.log(equalizeArray(arr2));
