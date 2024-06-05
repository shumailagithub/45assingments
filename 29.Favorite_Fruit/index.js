// Q No 29:
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Kiwi", "Grapes", "bananas"];
if (favorite_fruits.includes("bananas")) {
    console.log("I rally like bananase!");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("I really like Kiwi!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I really like Mango!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I really like Grapes!");
}
if (favorite_fruits.includes("PineApple")) {
    console.log("I really like PineApple!");
}
export {};
