"use strict";

// 1) Reverse a string

// Write code that takes a string as the input and returns the string reversed
//  Input: "Hello"  > Output: "olleH"

let word = "Computer";
for (let i = word.length -1; i >= 0; i--){
    console.log(word[i]);
}





// 2) Capitalize letter

// Write code that takes a string as input and capitalize the first letter of each word
// Separate words with only one space (i.e. input: "hello word" > output: "Hello World" )

let capitalizedWords = "this is fun";
    console.log(capitalizedWords[0].toUpperCase() + capitalizedWords.substring(1, 4) 
    + " " + capitalizedWords[5].toUpperCase() + capitalizedWords.substring(6, 7) 
    + " " + capitalizedWords[8].toUpperCase() + capitalizedWords.substring(9,11));

// The numbers in the "()" after .substring relates to the index positions and
// includes all indeces between those numbers.





// 3) Compress a string of characters

// An input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to
// "3a5b4c2a3c3b3a3b3a"

let letterString = 'fffeevvvv';
function compressedString (str = '') {
   let newString = '';
   let count = 1;
   for(let i = 0; i < str.length; i++){
      let currentLetter = letterString[i]; //compares current element with next element in for loop
      let nextLetter = letterString[i + 1];
      if(currentLetter === nextLetter){
         count++;
      }else{
         newString += currentLetter + String(count); 
         //"String" = the text string "fffeevvvv" and (count) = the times each letter repeats
         count = 1; // this resets the counter to 1 because no letter can have "0" as a value
      };
   }
   return newString

};
console.log(compressedString(letterString));