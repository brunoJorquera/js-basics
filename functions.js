
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE

function sum(num1, num2){
  console.log(num1 + num2)
}

sum(2,5)

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE

function greaterThanFive(number){
  if(number > 5){
   return true// console.log(true)
  } else{
    return false//console.log(false)
  }
}

greaterThanFive(4)

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE

// let word = "Zack"
// console.log(str.startsWith("Z"))

function findZWords(word){
  if(word.startsWith("Z")){
    return "the name begins with Z"
  } else{
    return "the name does not begin with Z"
  }
  
}

let nameCheck = findZWords("Zack")

console.log(nameCheck)

// //Other Possibile Option 
// function findZWords(word) {
//   if (word[0] === 'Z' || word[0] === 'z') {
//     return "the name begins with Z";
//   } else {
//     return "the name does not begin with Z"
//   }
// }
// console.log(findZWords("debra"));

// function findZwords(word){
//   if(word.toLowerCase().startswith('z')){
//     return "the name begins with z"
//   } else{

//     return "the name does not start witj z"
//   }
// }

// console.log(findZWords("Zebra"))


//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE

function iLove(name,love){
  return `${name} loves ${love}!`
}

let loveString = iLove("John","Ham")
console.log(loveString)