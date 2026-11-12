function printString(s) {
    console.log(s);
}
printString("Hello!");

// Outcome: print a string with a s at the end

function printStringWithS(s) {
    console.log(s + "s");
}
printStringWithS("Hello");


/* Part 1: The Guest List (Set practice)

Create a new Set named guestList.

Add these guests to the list: "Alice", "Bob", "Charlie", and then try adding "Alice" again (duplicate!).

Print out the .size of guestList to make sure the duplicate was removed. */

// a new guest list 
let guestList = ();
// add them to the list 
guestList.add = ("Alice");
guestList.add = ("Bob");
guestList.add = ("Charlie");
guestList.add = ("Alice");

console.log(guestList.size);
// printing 