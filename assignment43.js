"use strict";
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let modifiedMagicians = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
let magicians = ["halenwalker", "alexander", "jinny", "okasha"];
let ModifiedMagicians = make_great([...magicians]);
console.log("Original Magicians");
show_magician(magicians);
console.log(" Modified Magicians");
show_magician(ModifiedMagicians);
