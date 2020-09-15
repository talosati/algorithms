// https://www.hackerrank.com/challenges/staircase/problem

let number = 6;

function staircase(n) {
    let s = '';
    for (let i = 1; i <= n; i++) {
        if (i === n) {
            s += ' '.repeat(n - i) + '#'.repeat(i);
        } else {
            s += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
        }
    }
    return s;
}

console.log(staircase(number));
