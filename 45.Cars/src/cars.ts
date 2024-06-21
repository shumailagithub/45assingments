// Q No 45:
// Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function car(manufacturer:string,model:number, ...rest: {[key : string]: any}[]){
    const car_obj = {
     manufacturer: manufacturer,
     model :model,
     ...Object.assign({}, ...rest)
    } 
    return car_obj
    
 }
 
 let ans1 = car("toyota", 2024)
 console.log(ans1);
 
 
 let ans2 = car("Toyota",2024,{color:"red"},{optional_feature:["power window","air bag"]})
 console.log(ans2);
 