//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {

    return  position + (roll * 2)
  }

  
//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00


// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function(list){
  
    function compareNumbers(a, b) {
    return a - b;
  }
   let newArray = list.sort(compareNumbers) 
      return newArray[0];
  }
  
  var max = function(list){
    
      function compareNumbers1(a, b) {
    return a - b;
  }
   let newArray1 = list.sort(compareNumbers1) 
   let lastNumber = newArray1.pop();
    return lastNumber
  
  }
  
  var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//"www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

//Now you have to write a function that takes an argument and returns the square of it.

// Write the "square"-function here

let square = function Numsquare(num){
  
  return Math.pow(num, 2)

}

//We need a function that can transform a number (integer) into a string.

//What ways of achieving this do you know?

function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
//   return String(num)
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')


// let nameArray = name.split(" ");
  // return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}


//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples:
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}

//Trolls are attacking your comment section!

//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

//Your task is to write a function that takes a string and return a new string with all vowels removed.

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//   Examples
//   Input: [1, 5.2, 4, 0, -1]
//   Output: 9.2
  
//   Input: []
//   Output: 0
  
//   Input: [-2.398]
//   Output: -2.398 

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }