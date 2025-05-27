// For example, for [1, 2, 2] it should return 9 because 
    //1^2 + 2^2 +2^2 = 9

    function squareSum(numbers){
        return numbers.reduce(function(sum, n){
          return (n*n) + sum;
        }, 0)
      }
  
      function squareSum(numbers){
        return numbers.reduce((sum,num) => sum + (num * num), 0);
      }

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n){
  var num=0;
  if(n==1) return 1;
  if(n%Math.sqrt(n)==0) num++;
  for(var i=1;i<Math.sqrt(n);i++){
      if(n%i==0){
          num+=2;
      }
  }
  return num;
}

// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

// Write a function "greet" that returns "hello world!"
function greet (){
  let sum = 1 + 1
  if (sum == 2){
     return "hello world!"
  }
 
} 

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


let gimme = function (inputArray) {
  let index = 0;
  let max = Math.max(...inputArray);
  let min = Math.min(...inputArray);
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] !== max && inputArray[i] !== min){        
      index = i;
    }
  }
  return index;
};