function func(manufacturer: string, ModelName: string, ...options: [string , any ][]): Record<string , any > {
  const car : Record<string , any> = {
    manufacturer: manufacturer,
    ModelName: ModelName,
  };
for(const [key , value] of options){
    car[key] = value;
}
  return car;
}

console.log(func("Peugot", "ES26",["color", 'Red'], ["Features", "AutoPilot"],["Mobility", "yes"]));
