// Q No 43:
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let Magician = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumledore"];
function copy_of_array(arr) {
    return [...arr];
}
let arr_copy = copy_of_array(Magician);
function make_great(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr_copy[i] = `The Great , ${arr[i]}`;
    }
}
make_great(arr_copy);
function show_magicians(arr) {
    return arr;
}
console.log("Original Array", show_magicians(Magician));
console.log("Copy Array", show_magicians(arr_copy));
export {};
