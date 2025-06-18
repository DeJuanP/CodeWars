//Write a function that returns a string in which firstname is swapped with last name.

//"john McClane" --> "McClane john"

function nameShuffler(str){
  //Shuffle It
  //Must be space between quotations to reverse words instead of letters
   return str.split(" ").reverse().join(" ");

}