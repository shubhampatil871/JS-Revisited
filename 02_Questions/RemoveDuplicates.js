//Question -->
// Write a function removeDuplicates that takes an array of numbers as input and returns a new array with only the unique elements, removing any duplicates.

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Example usage:
const numbers = [1, 2, 3, 4, 2, 3, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
