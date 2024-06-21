// Q No 44:
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwiche(item) {
    console.log("Making your sandwiche with: ");
    item.forEach(element => console.log("- " + element));
}
make_sandwiche(["Ham", "Cheese", "Lettuce"]);
make_sandwiche(["Chicken", "Egg", "Spread"]);
make_sandwiche(["Peanut", "Butter", "Jelly"]);
export {};
