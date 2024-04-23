// 21.They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.



let objectItems:{[key:string]:any} = {
    "laptop": {
        name:"laptop",
        price: "8000",
        description: "High performance with fast processor"
    },
    "mouse": {
        name: "mouse",
        price:1000,
        description: "Good quality ,Speed and performance."
    },
  "keyboard": {
    name : "keyboard",
    price: "5000",
    description: "With smart and soft touch keys,and easy to understand keys."
  }  
}

console.log(objectItems);
