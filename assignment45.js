"use strict";
function func(manufacturer, ModelName, ...options) {
    const car = {
        manufacturer: manufacturer,
        ModelName: ModelName,
    };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
console.log(func("Peugot", "ES26", ["color", 'Red'], ["Features", "AutoPilot"], ["Mobility", "yes"]));
