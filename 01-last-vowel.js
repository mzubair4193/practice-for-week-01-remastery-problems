/*
Write a function `lastVowel(str)` that takes in a string and returns the last
vowel that appears sequentially in the string. Note that the string may contain
capitalization.

Hint: You may find the `String.toLowerCase` or `String.toUpperCase` methods useful.

String.toLowerCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
String.toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


function lastVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];// sets the variable for the vowels

  const lowerStr = str.toLowerCase();

  let lastVowelChar = null;

  for (let i = lowerStr.length - 1; i >= 0; i--) {
    const char = lowerStr[i];

    if (vowels.includes(char)) {
      lastVowelChar = str[i];
      break;
    }
  }

  return lastVowelChar;
}



console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
