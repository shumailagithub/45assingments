"use strict";
// Q No 45:
// Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// function storeInfo(manufacturer:string,model: string, ...extraOPtion:{ 
//     [key: string]:any
// }[])
// Object {
//     const carsInfo = {
//         manufacturer:manufacturer,
//         model:model,
//     ...Object.assign({}, ...extraOPtion)
// }
// return storeInfo;
// };
// let answer = storeInfo('Honda','Civic',{color:'black'}, {features: ['Navigation', 'Power Window']});
//     console.log(answer);
function car(manufacturer, model, ...rest) {
    const car_obj = Object.assign({ manufacturer: manufacturer, model: model }, Object.assign({}, ...rest));
    return car_obj;
}
let ans1 = car("toyota", 2024);
console.log(ans1);
let ans2 = car("Toyota", 2024, { color: "red" }, { optional_feature: ["power window", "air bag"] });
console.log(ans2);
