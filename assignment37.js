"use strict";
function make_shirt(size = "Large ", message = " I love Typescript") {
    console.log(` size is ${size}  and message should be :${message}`);
}
make_shirt(); // large by default
make_shirt("Medium"); //  medium performed manually
make_shirt("Excel", "Do you love Typescript ??");
