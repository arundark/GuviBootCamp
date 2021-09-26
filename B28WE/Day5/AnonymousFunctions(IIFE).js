//Day5 WE
//1. Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array
let numArry = [8,1,4,8,7]
   // using Anonymous function
let oddNumbers = function(numArry){
    for(let item of numArry){
        if(item%2 !== 0)
          console.log(item);
    }
}
oddNumbers(numArry);
  // using IIFE 
(function(numArry){
    for(let item of numArry){
        if(item%2 !== 0)
          console.log(item);
    }
})(numArry);

//b.Convert all the strings to title caps in a string array
let stringArray = ['arun','john']
    // using Anonymous function
let convertUppercase = function(stringArray){
    for(var i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toUpperCase();
    console.log(stringArray);
}
convertUppercase(stringArray);
    // using IIFE
(function(stringArray){
    for(var i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toUpperCase();
    console.log(stringArray)
})(stringArray);

//c.Sum of all numbers in an array
let valuesArry = [8,1,4,8];
  // using Anonymous function
let findSum = function(arr){
    let res = 0;
    for(var item of arr)
      res += item;

    console.log(res);
}
findSum(valuesArry);
   // using IIFE
 (function(arr){
    let res = 0;
    for(var item of arr)
      res += item;

    console.log(res);
})(valuesArry); 