function Sandwiches(...Items: string[]) {
  console.log(` This sandwiches consist of the following ingredients`);


  for(let Item of Items){
    console.log(`${Item}`);
    
  }
  
}

Sandwiches("Tikka\n");

Sandwiches("Tikka", "Fagita\n");

Sandwiches("Tikka", "Fagita", "Lazania");
