let current_users: string[] = ["Ali", "Hammad", "Mohsin"];
let new_users: string[] = ["ALI", "jawwad", "Mehmit"];

let current_users_loweredCase = current_users.map((user) => {
  return user.toLowerCase();
});

for (const user of new_users) {
  if (current_users_loweredCase.includes(user.toLowerCase())) {
    console.log("Already Used . Please insert a new user Name");
  } else {
    console.log("UserName Available");
  }
}
