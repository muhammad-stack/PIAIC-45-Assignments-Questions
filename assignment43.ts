

function show_magician(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]) {
  let modifiedMagicians = [];
  for (let magician of magicians) {
    modifiedMagicians.push("the Great " + magician);
  }
  return modifiedMagicians;
}

let magicians: string[] = ["halenwalker", "alexander", "jinny", "okasha"];
let ModifiedMagicians = make_great([...magicians]);

console.log("Original Magicians");
show_magician(magicians);

console.log(" Modified Magicians");
show_magician(ModifiedMagicians);
