// Creating strings:
let singleQuotesString = "Hello, World!";
let doubleQuotesString = "JavaScript is awesome!";

// Concatenation:
let firstName = "John",
  lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: John Doe

// Accessing characters in a string:
let myString = "Hello";
let firstChar = myString[0];
console.log(firstChar); // Output: H

// String length:
let strLength = myString.length;
console.log(strLength); // Output: 5

// String methods:
let uppercaseString = myString.toUpperCase();
let lowercaseString = myString.toLowerCase();
console.log(uppercaseString, lowercaseString); // Output: HELLO hello

let indexOfO = myString.indexOf("o");
let lastIndexOfO = myString.lastIndexOf("o");
console.log(indexOfO, lastIndexOfO); // Output: 4 4

let slicedString = myString.slice(1, 4);
let substring = myString.substring(1, 4);
console.log(slicedString, substring); // Output: ell ell

let newString = myString.replace("Hello", "Hi");
console.log(newString); // Output: Hi

let wordsArray = myString.split(" ");
console.log(wordsArray); // Output: ['Hello']

let comparisonResult = "apple".localeCompare("banana");
console.log(comparisonResult); // Output: -1 (str1 comes before str2)

// Advanced Examples:
let complexString = "   JavaScript is amazing!   ";
let trimmedString = complexString.trim();
console.log(trimmedString); // Output: JavaScript is amazing!

let stringWithNumbers = "12345";
let numericValue = Number(stringWithNumbers);
console.log(numericValue); // Output: 12345

let reversedString = myString.split("").reverse().join("");
console.log(reversedString); // Output: olleH

let stringWithWhitespace = "   Trim me!   ";
let trimmedLeft = stringWithWhitespace.trimStart();
let trimmedRight = stringWithWhitespace.trimEnd();
console.log(trimmedLeft, trimmedRight); // Output: 'Trim me!   ', '   Trim me!'

// Checking if a string starts/ends with a specific substring:
let startsWithHello = myString.startsWith("Hello");
let endsWithWorld = myString.endsWith("World");
console.log(startsWithHello, endsWithWorld); // Output: true false

// Repeating a string:
let repeatedString = "abc".repeat(3);
console.log(repeatedString); // Output: abcabcabc

// Checking if a string includes a specific substring:
let includesSubstring = myString.includes("lo");
console.log(includesSubstring); // Output: true

// Converting a string to an array of characters:
let charArray = Array.from(myString);
console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']

// Extracting a substring using substr():
let substringWithIndex = myString.substr(1, 3);
console.log(substringWithIndex); // Output: ell

// Padding a string:
let paddedString = "5".padStart(3, "0");
console.log(paddedString); // Output: '005'

// Finding the first occurrence of a character:
let firstOccurrenceIndex = myString.indexOf("l");
console.log(firstOccurrenceIndex); // Output: 2

// Checking if a string contains only numeric characters:
let numericString = "12345";
let isNumeric = /^\d+$/.test(numericString);
console.log(isNumeric); // Output: true

// Converting a string to an array of words:
let sentence = "JavaScript is a powerful language";
let wordArray = sentence.split(" ");
console.log(wordArray); // Output: ['JavaScript', 'is', 'a', 'powerful', 'language']

// Substring extraction using substr():
let extractedSubstring = myString.substr(1, 3);
console.log(extractedSubstring); // Output: ell

// Iterating over characters in a string:
for (let char of myString) {
  console.log(char);
}

// Concatenating multiple strings with join():
let stringArray = ["JavaScript", "is", "fun"];
let concatenatedString = stringArray.join(" ");
console.log(concatenatedString); // Output: JavaScript is fun
