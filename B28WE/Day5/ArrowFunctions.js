//a. Print odd numbers in an array
let oddNumbers = numArry => {
    for(let item of numArry){
        if(item%2 !== 0)
          console.log(item);
    }
}

//b.Convert all the strings to title caps in a string array
let stringArray = ['arun','john']
    // using Anonymous function
let convertUppercase = stringArray => {
    for(var i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toUpperCase();
    console.log(stringArray);
}
convertUppercase(stringArray);


//c.Sum of all numbers in an array
let valuesArry = [8,1,4,4];
  // using Anonymous function
let findSum = arr => {
    let res = 0;
    for(var item of arr)
      res += item;

    console.log(res);
}
findSum(valuesArry);


//d.Return all the prime numbers in an array

const isPrime = (arr, n) => {
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



//Return all the palindromes in an array
var findPalindrome = arr => {
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

console.log(findPalindrome([121, 131, 20 ,141 ,55, 56]))

