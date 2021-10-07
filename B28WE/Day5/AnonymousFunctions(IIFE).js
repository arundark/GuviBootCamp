//Day5 WE
//1. Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array
let numArry = [8,1,4,8,7];
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
let stringArray = ['arun','john'];
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

//d.Return all the prime numbers in an array

const isPrime = function (arr, n){
     let arry = [];
    for (let i = 0; i < n; i++){
         let isPrime = true;
      
      for (let j =2; j < arr[i]; j++){
           if (arr[i] % j === 0)
            isPrime = false;
      }
      if (isPrime)
        arry.push(arr[i]);
    }
    return arry;
}
console.log(isPrime([2,3,4,5,6], 5));

(function (arr, n){
  let arry = [];
 for (let i = 0; i < n; i++){
      let isPrime = true;
   
   for (let j =2; j < arr[i]; j++){
        if (arr[i] % j === 0)
         isPrime = false;
   }
   if (isPrime)
     arry.push(arr[i]);
 }
 console.log(arry);
})([2,3,4,5,6], 5);

//e.Return all the palindromes in an array
var findPalindrome = function (arr){
    let res = [];
  for ( var item of arr){
      let n = item;
      let r = 0;
      let s = 0;
      while ( n > 0){
        r = n % 10 ;
        n = parseInt(n / 10 ,10);
        s = s * 10 + r
      }
      if (s === item)
         res.push(item);        
  }
   return res;
}

console.log(findPalindrome([121, 131, 20 ,141 ,55, 56]));


//f.Return median of two sorted arrays of same size
let median = function(arr1, arr2, n){
  let i = 0;
  let j = 0;
  let count;
  let m1 = -1;
  let m2 = -1;

  for(count = 0; count <= n; count++){

    if(i === n){
      m1 = m2;
      m2 = arr2[0];
      break;
    }

    if(j === n){
      m1 = m2;
      m2 = arr1[0];
      break;
    }

    if( arr1[i] <= arr2[j]){
       m1 = m2;
       m2 = arr1[i];
       i++;
    }

    else{
      m1 = m2;
      m2 = arr2[j];
      j++;
    }
  }

  return (m1+m2)/2;
}
let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
var n1 = arr1.length;
console.log(median(arr1, arr2, n1))

//g.Remove duplicates from an array
var removeDuplicate = function (arr , n){
  let output = [];
  for(let item of arr){
    if(!output.includes(item))
         output.push(item);
  }
  return output;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 4, 5, 5]))


//h.Rotate an array by k times
let rotateArray = function(arr, k){
    let temp = [];
   for (let i = 0 ; i < k; i++)
       temp.push(arr[i]);
   
   for (let j = 1; j <= k ; j++)
       arr.shift();


   return arr.concat(temp);
}

console.log(rotateArray([1, 12, 15, 26, 38],3));