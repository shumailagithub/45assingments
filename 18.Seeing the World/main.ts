// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



                //favorit places store in array
let favoritplaces :string[] = ["canda","paris","china","rome","italy"];


                 //Print array in its original order.
console.log("original order: " , favoritplaces);


                  //Print array in alphabetical order

console.log("alphabetical order: ",favoritplaces.slice().sort());


                //array is still in its original order

console.log("original order: " , favoritplaces);                
                

                //Print array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse alphabeticaly: ",favoritplaces.slice().sort().reverse());
                

                 //array is still in its original order by printing it again
                 
console.log("original order: " , favoritplaces);

                  //Reverse order of list. Print the array to show that its order has changed.

console.log("Reverse Order Changed");

favoritplaces.reverse();

console.log(favoritplaces);

                 //Reverse the order of your list again. Print the list to show it’s back to its original order

console.log("Original Order: ",favoritplaces.sort());

console.log(favoritplaces);


                 //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("Reverse alphabetical Order Changed: ",favoritplaces.sort().reverse());

console.log(favoritplaces);

                 