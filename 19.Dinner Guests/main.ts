// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.



let guest_list:string [] = ["Eram", "Aisha", "Aliya"];

                   
console.log("Unfortunatly! The new dinner table wont arrive so we can invite just 2 guest");

guest_list.unshift("Afzal, Zafar");

            //Print message to update List

console.log("update list of guest: ", guest_list);

              //Remove 2 guest from list

while (guest_list.length > 1) {
    let removeGuest :string | undefined = guest_list.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry ${removeGuest}, we can not invite you`);
        
    }
}              
            

                      //print message to each of the two people still in our list
guest_list.forEach(guest =>{
    console.log(`${guest}, you are still invited to dinner.`);
    
});

                     //remove last 2 names
guest_list.splice(0, guest_list.length);

                     //update empty list

console.log(guest_list);
                     