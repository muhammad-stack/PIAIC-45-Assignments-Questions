let Name = "Abbas";
let Name1 = "Mohib";

// Test using equality and inequality of string
console.log("Is Name == 'Abbas' | I predict true ");
console.log(Name == "Abbas");

console.log("Is Name != 'Abbas' | I predict False");
console.log(Name != "Abbas");

console.log(" Is Name === Name1 | I predict false");
console.log(Name === Name1);

console.log(" Is Name1 != 'Abbas' | I predict true");
console.log(Name1 != "Abbas");

// Test using the lower case function

let word1 = "greet";
let word2 = "salam";

console.log("Is 'word1 toLowerCase()' | I predict true");
console.log(word1.toLowerCase() === "greet");

console.log(" Is word2 to upperCase | I predict False");
console.log(word2.toLowerCase() != "salam");

//  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number01 = 78;
let number02 = 34;

console.log("Is number01 > 78 | I predict False");
console.log(number01 > 78);

console.log("Is number02 <= 35 | I predict true");
console.log(number02 <= 35);

console.log("Is number01 == number02 | I predict False");
console.log(number01 == number02);

console.log("Is number02 != 78 | I predict true");
console.log(number02 != 78);

console.log(" Is number01!|| number02! | I predict true");
console.log(!number01 || !number02);

//  • Tests using "and" and "or" operators

let magicExsist = true;
let magicNotExsist = false;

console.log(
  " Is magicExsist == true && magicNotExsist != false | I predict true"
);
console.log(magicExsist == true && magicNotExsist != false);

console.log(
  " Is magicExsist == true || magicNotExsist == false | I predict false"
);
console.log(magicExsist == true || magicNotExsist == false);

//  • Test whether an item is in a array

let veggies = ["carrot", "Tomato", "CorlyFlower", "Brindger"];

console.log("Is veggies includes 'Tomato' | I predict true");
console.log(veggies.includes("Tomato"));

console.log("Is veggies includes 'Soya beans' | I predict false");
console.log(veggies.includes("Soya beans"));

//  • Test whether an item is not in a array

let grocery = ["milk", "wheat", "Rice", "veggies"];

console.log("Is grocery donot includes' milk ' | I predict false");
console.log(!grocery.includes("milk"));

console.log(" Is grocery does not include Snacks | I predict true' ");
console.log(!grocery.includes("Snacks"));
