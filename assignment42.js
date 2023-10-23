"use strict";
let Magicians = ["Jin", "Zakuta", "Hibachal"];
function make_great(magician_name) {
    let new_name = `Great ${magician_name}`;
    return new_name;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(make_great(magician));
    }
}
show_magicians(Magicians);
