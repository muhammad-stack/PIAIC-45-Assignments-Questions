"use strict";
let person_age = 23;
if (person_age < 2) {
    console.log("Person is a baby");
}
if (person_age <= 2 && person_age >= 4) {
    console.log(" Person is a toddler");
}
if (person_age >= 4 && person_age < 13) {
    console.log(" Person is a Kid");
}
if (person_age >= 13 && person_age < 20) {
    console.log(" Person is a teenager");
}
if (person_age >= 20 && person_age < 65) {
    console.log(" Person is an Adult");
}
if (person_age >= 65) {
    console.log(" Person is an Elder");
}
