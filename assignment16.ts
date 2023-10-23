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



