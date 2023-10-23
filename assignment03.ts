const user_name:String="Muhammad Ali";
// Following code converts the string into Lower case

console.log(user_name.toUpperCase());

// Following code converts the string into Upper case
console.log(user_name.toLowerCase());

// Following code converts the string into Title case AS there is not funciton in the Javascript/Typescript to Convert into Title case therefore we will do it manually
let Start:Boolean=true;
// Start the Loop
while(Start){
    // Following Condition checks weather the Name Data is single letter or Multi letter
    if (user_name.split(' ').length>1){
        // if MultiLetter THe String will coveted into Arrays then will be made in Titile case with Map function, 

       let InTitleCaseArr:String[]=user_name.split(' ').map((Name)=>{
        return Name.replace(Name[0],Name[0].toUpperCase())
       })

    //    After Making The Title case one by one String will be joined and printed 

       let InTitleCase:String=InTitleCaseArr.join(' ')
       console.log(`The Persons Name in Title case is: ${InTitleCase}`)
       Start=false
    }
    if (user_name.split(' ').length===1){
        // if single letter there will be no Loop or Map Function be used, and it will simply make the data into Title format 
        let InTitleCase:String=user_name.replace(user_name[0],user_name[0].toUpperCase())
        console.log(`The Persons name in Title case is: ${InTitleCase}`)
        Start=false
    }
}

