// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

let timeMachine = 2017;
let timeMachine2 = 2016;
let timeMachine3 = 1800;
let timeMachine4 = 1918;

function dayOfProgram(year) {
    // let january = 31;
    // let february = 28;
    // let februarywithleap = february + 1;
    // let februaryswitching = february - 13;
    // let march = 31;
    // let april = 30;
    // let may = 31;
    // let june = 30;
    // let july = 31;
    // let august = 31;
    // let september = 30;
    // let october = 31;
    // let november = 30;
    // let december = 31;
    if (1700 <= year && year <= 1917) {
        if (year % 4 === 0) {
            return "Julian calendar LEAP year";
        } else {
            return "Julian calendar year";
        }
    } else if (year === 1918) {
        return "year of switching";
    } else if (1919 <= year && year <= 2700) {
        if (year % 400 === 0 || year % 4 === 0) {
            return "Gregorian calendar LEAP year";
        } else {
            return "Gregorian calendar year";
        }
    }
}

console.log(dayOfProgram(timeMachine));
console.log(dayOfProgram(timeMachine2));
console.log(dayOfProgram(timeMachine3));
console.log(dayOfProgram(timeMachine4));
