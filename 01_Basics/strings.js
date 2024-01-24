// Creating strings:

// Using single quotes
let singleQuotesString = "Hello, World!";

// Using double quotes
let doubleQuotesString = "JavaScript is awesome!"; //This way is much more preffered as it reduces confusion

//Concatenating the strings
let firstName = "Shubham";
let lastName = "Patil";
let fullName = firstName + " " + lastName;
console.log(fullName);

// String interpolation (using Template literals):
let age = 27;
let greeting = `My name is ${firstName} ${lastName} and I'm  ${age} years old.`;
console.log(greeting);

// Accessing elements  in a string:
let myString = "Hello";
let firstChar = myString[0]; // Accessing the first character
console.log(firstChar); //

// String length:
let strLength = myString.length;
console.log(strLength);

// String methods:

// toUpperCase() and toLowerCase()
let uppercaseString = myString.toUpperCase();
let lowercaseString = myString.toLowerCase();
console.log(uppercaseString);
console.log(lowercaseString);

// indexOf() and lastIndexOf()
let indexOfO = myString.indexOf("o");
let lastIndexOfO = myString.lastIndexOf("o");
console.log(indexOfO);
console.log(lastIndexOfO);

// slice()
let slicedString = myString.slice(1, 4); // Slicing from index 1 to 3
console.log(slicedString); // Output: ell

// substring()
let substring = myString.substring(1, 4); // Extracting characters from index 1 to 3
console.log(substring); // Output: ell
console.log(myString); // Output: ell

// replace()
let newString = myString.replace("Hello", "Hi");
console.log(newString); // Output: Hi

// split()
let wordsArray = myString.split(" "); // Splitting the string into an array
console.log(wordsArray); // Output: ['Hello']

// String comparison:
let str1 = "apple";
let str2 = "banana";
let comparisonResult = str1.localeCompare(str2);
console.log(comparisonResult); // Output: -1 (str1 comes before str2)

// Escape characters:
let escapeExample = "This is a single 'quote' inside a string.";
console.log(escapeExample);

// Multi-line strings (Template literals):
let multiLineString = `
  This is a
  multi-line
  string.
`;
console.log(multiLineString);

// String immutability:
let immutableString = "Hello";
// The following line does not modify the original string
let modifiedString = immutableString.toUpperCase();
console.log(immutableString); // Output: Hello
console.log(modifiedString); // Output: HELLO
