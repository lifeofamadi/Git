/*
i  Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

ii. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5

iii. Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

iv. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
*/

//A JavaScript function that checks whether a passed string is a palindrome or not
const palindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return `${str} is a palindrome`;
  } else {
    return `${str} is a not palindrome`;
  }
};
console.log(palindrome("madam"));

//A JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
const numOfVowel = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(numOfVowel("amadi"));

//A JavaScript function that accepts an argument and returns the type.

const typeOfArg = (arg) => {
  return typeof arg;
};

console.log(typeOfArg("success"));

//A JavaScript function to get the number of occurrences of each letter in a specified string.
const numOfOccurrences = (str) => {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (/[a-z]/.test(char)) {
      if (counts[char]) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }
  }

  return counts;
};

console.log(numOfOccurrences("amamsmsmmsnsjuahiaqwwwwww"));
