"use strict";

// 1) Reverse a string

// Write code that takes a string as the input and returns the string reversed
//  Input: "Hello"  > Output: "olleH"

let word = "Computer";
for (let i = word.length -1; i >= 0; i--){
    console.log(word[i]);
}

// code works



// 2) Capitalize letter

// Write code that takes a string as input and capitalize the first letter of each word
// Separate words with only one space (i.e. input: "hello word" > output: "Hello World" )

let capitalizedWords = "this is fun";
    console.log(capitalizedWords[0].toUpperCase() + capitalizedWords.substring(1, 4) 
    + " " + capitalizedWords[5].toUpperCase() + capitalizedWords.substring(6, 7) 
    + " " + capitalizedWords[8].toUpperCase() + capitalizedWords.substring(9,11));