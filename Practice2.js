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
let guestList = new Set ();
add them to the list 
guestList.add("Alice");
guestList.add("Bob");
guestList.add("Charlie");
guestList.add("Alice");

console.log(guestList.size);
// printing 

// set use .add and map use .set

/* Scenario: You're hosting a party and want to keep track of your guests and their ages using a JavaScript Map.

Your Tasks:
1. Create a new Map called guestList.
2. Add the following guests and their ages:
   - Alice — 25
   - Bob — 30
   - Charlie — 28
3. Use .get() to retrieve Alice's age.
4. Use .has() to check whether David is on the guest list.
5. Use .size to display the total number of guests.
*/

let guestList1 = new Map();
guestList1.set("Alice", 25);
guestList1.set("Bob", 30);
guestList1.set("Charlie",28);
console.log (guestList1.get("Alice"));
console.log (guestLis1.has("David"));
console.log (guestList1.size);