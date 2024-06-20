// Q No 41:
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
//---------------------------------------------------------------------------------------------------
//-------------------array of magician’s names-------------------------------------------------------
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumledore"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
export {};
