// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
//  • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
//   only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
//  invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
let guest_list = ["Eram", "Aisha", "Aliya"];
console.log("Unfortunatly! The new dinner table wont arrive so we can invite just 2 guest");
guest_list.unshift("Afzal, Zafar");
//Print message to update List
console.log("update list of guest: ", guest_list);
//Remove 2 guest from list
while (guest_list.length > 1) {
    let removeGuest = guest_list.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry ${removeGuest}, we can not invite you`);
    }
}
//print message to each of the two people still in our list
guest_list.forEach(guest => {
    console.log(`${guest}, you are still invited to dinner.`);
});
//remove last 2 names
guest_list.splice(0, guest_list.length);
//update empty list
console.log(guest_list);
export {};
