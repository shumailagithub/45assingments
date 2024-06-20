// Q No 42:
// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

//---------------------------------------------------------------------------------------------------------------------------------------



let magicians: string [] = ["Harry Potter", "Hermione Granger","Ron Weasley","Albus Dumledore"] 

function make_great(magician_array: string []){
    for (let i = 0; i < magician_array.length; i++) {
        magicians[i] = "the Great " + magician_array[i]

    }

}

function show_magicians(magicians: string[]){
    magicians.forEach(magician => {
        console.log(magician);
             
    });

}
make_great(magicians)
show_magicians(magicians)

