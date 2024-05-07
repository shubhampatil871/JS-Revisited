//Question-->
// Write a function isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. Ignore non-alphanumeric characters and consider uppercase and lowercase letters as equal.

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Check if the clean string is equal to its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
