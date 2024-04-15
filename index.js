function isPalindrome(word) {
  // Write your algorithm here
  let wordArray = word.split('')
  let output

  // Reverse wordArrat
  let reversedWordArray = []
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reversedWordArray.push(wordArray[i])
  }

  // Compare each index

  for (let index in wordArray) {
    if (wordArray[index] === reversedWordArray[index]) {
      return true;
    }
    else {

      return false;
    }
  }


}




/*
  Add your pseudocode here
  Convert whatever is input as the arg to an array
  create a new array that is reversed
  compare each index in the reversed array to the original one
  if every index matches output true if it doesn't false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
