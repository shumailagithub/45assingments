// Q No 27:
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//------------------------------------------------------------------------------------------------------------------
// • If the alien is green, print a message that the player earned 5 points.
//Version 1
let Alien_Color_1 = "green";
if (Alien_Color_1 == "green") {
    console.log("the player earned 5 points.");
}
else {
    console.log("the player earned 15 points.");
}
//------------------------------------------------------------------------------
// • If the alien is yellow, print a message that the player earned 10 points.
// version 2
let Alien_Color_2 = "yellow";
if (Alien_Color_2 == "yellow") {
    console.log("the player earned 10 points.");
}
else {
    console.log("the player earned 15 points.");
}
//--------------------------------------------------------------------------------
// • If the alien is red, print a message that the player earned 15 points.
//Version 3
let Alien_Color_3 = "red";
if (Alien_Color_3 == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("the player earned 5 points.");
}
export {};
