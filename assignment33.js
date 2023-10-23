"use strict";
let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of ordinal_numbers) {
    if (number === 1) {
        console.log(number, "st");
    }
    else if (number === 2) {
        console.log(number, "nd");
    }
    else if (number === 3) {
        console.log(number, "rd");
    }
    else {
        console.log(number, "th");
    }
}
