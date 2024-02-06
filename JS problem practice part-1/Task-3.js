
//Write a function to count the number of vowels in a string.

function countVowel(str) {
    let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
        count++;
    }
  }
  return `Total number of vowel are ${count}`;
}

const string = 'My name is Leon. I am a student. Please count the vowel of my string';
console.log(countVowel(string));