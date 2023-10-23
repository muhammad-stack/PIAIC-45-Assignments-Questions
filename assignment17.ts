let guest:String[]=['hamid','ahmed','asim']
let randomNum= Math.floor(Math.random() * 2)

console.log(`sorry ${guest[randomNum]} could'nt get to the dinner`);
guest[randomNum] = 'jason'

for(let i=0;i<guest.length;i++){
    console.log(`can you come to the dinner ${guest[i]}`);
    
};
console.log("hello guest we just found a bigger dinning table  ");
guest.unshift("Kamran");
guest.splice(2,0,"Iftikhar");
guest.push("Babar");

for (let i=0;i<guest.length;i++){
    console.log(`you guys are also invited to the dinner party ${guest[i]} `);
}


console.log(" Sorry i can only invite two people for dinner");
for(let c =0 ; c <guest.length + 1;c++){
  let removedGuest = guest[guest.length - 1]
  console.log(` Sorry ${removedGuest} i could'nt invite you to the dinner `);
  guest.pop()
  
}

for(let c =0 ; c<guest.length;c++){
  console.log(` You guys are still Invites : ${guest[c]}`);
  
}

for(let c =0 ; c<=guest.length;c++){
  guest.pop()
  console.log(`Empty List ${guest}`);
  
}

