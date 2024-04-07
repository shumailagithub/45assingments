// 16.More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a
//  new set of invitation messages, one for each person in your list.



let guest_list:string [] = ["Eram", "Aisha", "Aliya"];

console.log("Good News!We found a bigger dinner table, so we invite some more guest." );
              //Adding one new guest to the beginning of the  array.

 guest_list.unshift("Hamza");


             //Adding one new guest to the middle of the  array.
guest_list.splice(Math.floor(guest_list.length/2),0, "saba");

//Add one new guest to the end of the array.

guest_list.push("Jasmine");

             //Adding all guest with the message

guest_list.forEach(guest => {
    console.log(`${guest} ,you are invited to the dinner.`);
    
})

