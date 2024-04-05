// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set 
// of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let guest_list:string [] = ["Eram", "Aisha", "Aliya"];

guest_list.forEach(guest =>{
    console.log(`Hello ${guest}, today we invite you for Dinner will you join us today ? \n\n`);
    
})

let absentGuest = "Aisha";
console.log(`${guest_list[1]}, Can Not attend The dinner today due to some reason. \n\n`);


let newGuest = "Abishay";
guest_list[guest_list.indexOf(absentGuest)] = newGuest ;

guest_list.forEach(guest =>{
    console.log(`Hello ${guest}, today we invite you for Dinner ! will you join us today? \n\n`);
    
})






