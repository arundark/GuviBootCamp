//JavaScript Functions — Warmup Pbms
//1.
let addFive = function (number){
  let sum = 5;
  
  return sum + number;
}

let result = addFive(5);
console.log(result);

//2.Fill in your code that takes an number minutes and converts it to seconds.
let toSeconds = function (min){
  return min * 60;
}
console.log(toSeconds(2));

//3.Create a function that takes a string and returns it as an integer.
let toInteger = function(mystr){
  return parseInt(mystr);
}
console.log(toInteger('1000'));

//4.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
let nextNumber = function(num){
  return ++num;
}
console.log(nextNumber(-3));

//5.Create a function that takes an array and returns the first element.
let myArr = [1, 2, 3];

let getFirst = function(myArr){
  return myArr[0];
}
console.log(getFirst(myArr));

//6.Convert Hours into Second
let hourToSeconds = function(time){
  return time * 3600;
}
console.log(hourToSeconds(2));

//7.Create a function that takes height and width and finds the perimeter of a rectangle.
let height = 6;
let width = 7;

let findPerimeter = function(height, width){
  let perimeter = 2 * (height + width);
  return perimeter;
}
console.log(findPerimeter(height, width));

//8.Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
let lessThan100 = function(num1, num2){
  let sum = num1 + num2;
   if (sum < 100)
      return true;

   return false;   
}
console.log(lessThan100(83, 34));

//9.There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
let remainder = function(num1, num2){
  return num1 % num2;
}
console.log(remainder(-9,45));

//10.Old macdonald had a farm:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
let countAnimals = function(turkey, horse, pigs){
   return (turkey * 2) + (horse * 4) + (pigs * 4);
}
console.log(countAnimals(2, 3, 5))

//11.Create a function that returns true if an integer is evenly divisible by 5, and false otherwise
let divisibleByFive = function(num){
  if(num % 5 === 0)
     return true;

   return false;  
}
console.log(divisibleByFive(-55));

//12.Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.
let isEven = function(num){
   if(typeof(num) !== 'number')
     return -1;
    
   if(num % 2 === 0) 
      return true;

   return false;  
}
console.log(isEven('11'));

//13.Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
let areBothOdd = function(num1, num2){
    if(num1 % 2 !== 0 && num2 % 2 !== 0)
      return true;

    return false;  
}
console.log(areBothOdd(1,4));

//14.Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space
let getFullName = function(firstName, lastName){
     if (typeof(lastName) === 'undefined')
       return firstName;

     return firstName + ' ' +lastName;
}
console.log(getFullName('GUVI'));

//15.Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
let getLengthOfWord = function(word){
  if (typeof(word) !== 'string' )
  return -1;

  return word.length;
}
console.log(getLengthOfWord(1));

//16.Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.
let isSameLength = function(word1, word2){
   return word1.length === word2.length;
}
console.log(isSameLength('GUVI','GEEK'));

//17.Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
let getNthElement = function(arry, n){
    if (arry.length === 0)
       return undefined;

     return arry[n];
}
console.log(getNthElement([1, 3, 5], 1));

//18.Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return
let getProperty = function(obj, key){
   if(key in obj)
       return obj[key];
    
   return undefined;    
}
console.log(getProperty({Name : 'arun'},'Name'));