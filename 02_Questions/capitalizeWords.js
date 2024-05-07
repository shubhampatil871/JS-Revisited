//Write a function capitalizeWords that takes a string as input and capitalizes the first letter of each word in the string.

function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join(" ");
}

// Example usage:
console.log(capitalizeWords("hello world")); // Output: "Hello World"
console.log(capitalizeWords("javascript is awesome")); // Output: "Javascript Is Awesome"
console.log(capitalizeWords("openai chatgpt")); // Output: "Openai Chatgpt"
