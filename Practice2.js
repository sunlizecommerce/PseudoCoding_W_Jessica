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
//add them to the list 
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
console.log (guestList1.has("David"));
console.log (guestList1.size);


// Create a function that takes two integers and displays the larger one.
//
// Example:
//
// largestInt(11, 22) → 22
//
// largestInt(22, 44) → 44
//
// * Hints:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators

// Input: 2 integers 
// Output: The larger integer
function largestInt(a,b){
    if (a<b) {
        return b;
    } else if(a>b) {
        return a;
    } else {
    return "invalid";
    }
}
console.log(largestInt(102,102));
  
// Compare both numbers and bigger number returns
// if (a<b) { if a is smaller than b 

// return b then return b 
// else a>b else a is bigger than b 
// return a then return a 


// Write a function that takes in a string and returns the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume string will not be empty.
//
// Example:
//
// largestWord(“Which word in the string will be the longest?”) → ‘longest’
//
// largestWord(“I love JavaScript, even though it’s challenging”) → ‘challenging’

function largestWord(string) {
  // Make string into words
  let words = string.split(" ");
  console.log(words);
  // loop over our string 

  // Take words 1 by 1
  // Compare 2 words 
  // If two words are equal 
  // Then stick with the first longest word
  // Set the larger word to a variable 
  // Continue comparing with each word in the string until we find the largest word 
  
  /*words = SPLIT text into words using spaces
    longestWord = ""

    FOR EACH word IN words
        IF word.length > longestWord.length
            longestWord = word


    RETURN longestWord */
}
largestWord("I love JavaScript, even though it’s challenging");
