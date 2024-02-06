// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function longestWord(str) {
  const splitArray = str.split(" ");
 // console.log(splitArray);

  let longWord = splitArray[0];

  for (const word of splitArray) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return `Longest Word is ${longWord}`;
}

const string = "I am learning Programming to become a programmer";

console.log(longestWord(string));
