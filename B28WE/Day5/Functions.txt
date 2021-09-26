//Anonymous function Task
let findFrequent =function(arr){
     let freqCount = 1;
     let count = 0
     let element;
    for(var i = 0; i<arr.length;i++){

        for(var j = i; j <arr.length;j++){

            if(arr[i] === arr[j])
               count++            
        }
        if (freqCount < count){
            freqCount = count;
           element = arr[i];
        }     
        count = 0;
    }
    return element;
}

console.log(findFrequent([3, ,3,3,'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))


//Arrow Function
var result = (a,b) => a*b;
console.log();
