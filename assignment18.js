"use strict";
let myPlaces = ['Estonia', 'Malaysia', 'Finland', 'Greece', 'Los Angeles'];
// array  oin original order
console.log('Original order :', myPlaces);
let sorted = myPlaces.slice().sort();
// array printed in alphabetical order
console.log('Alphabetically Ordered :', sorted);
// array in original order
console.log('Original Order: ', myPlaces);
// printed array in reverse alphabetoical order
let reversed = myPlaces.slice().sort().reverse();
console.log('Reverse alphabetical order :', reversed);
// array printed in original order
console.log('Original Order : ', myPlaces);
// array printed in reverse order
myPlaces.reverse();
console.log('Reversed order : ', myPlaces);
// array  again reversed and printed
myPlaces.reverse();
console.log('Again reversed back to roiginal : ', myPlaces);
// original array sorted alphabetically
myPlaces.sort();
console.log('Alphabetically sorted : ', myPlaces);
// again reversed and printed
myPlaces.sort().reverse();
console.log('Alphabetically Reversed ', myPlaces);
