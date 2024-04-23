// Equality and inequality with strings
console.log("Equality test with string:", "Apple" === "Apple");
// Equality and inequality 
console.log("Equality test with string:", "Apple" != "orange");
// Tests using the lower case function
console.log("Lower Case function test:", "Hello".toLowerCase() === "hello");
// Numerical tests involving equality
console.log("Equality test with Number:", 50 === 50);
// Numerical tests involving inequality 
console.log("Inequality test with Number:", 25 != 50);
// greater than 
console.log("Greater than :", 5 > 3);
//less than
console.log("Less than :", 2 < 10);
//greater than or equal to
console.log("greater than or equal to:", 20 >= 20);
//less than or equal to
console.log("less than or equal to,:", 9 <= 10);
//Tests using "and" and "or" operators
console.log("And Operator test:", 4 === 4 && 20 > 8);
//Tests using "or" operators
console.log("OR Operator test:", 4 === 4 || 20 > 8);
//Test whether an item is in a array
const fruits = ["Apple", "Banana", "Grapes"];
console.log("Test 'Apple' in the Array:", fruits.includes("Apple"));
// Test whether an item is not in a array
console.log('Testing "Pinapple" is not in Array:', !fruits.includes("Pinapple"));
export {};
