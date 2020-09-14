//Let in only the duplicated elements, and count how many elements had to remove.

let arr = [24, 29, 70, 43, 12, 27, 29, 24, 41, 12, 41, 43, 24, 70, 24, 100, 41, 43, 43, 100, 29, 70,
    100, 43, 41, 27, 70, 70, 59, 41, 24, 24, 29, 43, 24, 27, 70, 24, 27, 70, 24, 70, 27, 24, 43, 27,
    100, 41, 12, 70, 43, 70, 62, 12, 59, 29, 62, 41, 100, 43, 43, 59, 59, 70, 12, 27, 43, 43, 27, 27,
    27, 24, 43, 43, 62, 43, 70, 29];

// let arr2 = [3, 3, 2, 1, 3];

function getNumberOfDeletions(numbers) {
    numbers.sort();
    console.log(numbers);
    let duplicates = findDuplicates(numbers);
    return numbers.filter(n => !duplicates.includes(n)).length;
}

function findDuplicates(numbers) {
    return numbers.filter((e, i, a) => a.indexOf(e) !== i);
}

console.log(getNumberOfDeletions(arr));
// console.log(getNumberOfDeletions(arr2));

