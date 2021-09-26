//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var  request= new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET','https://restcountries.eu/rest/v2/all',true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract the data to JSON 

//some conversion is needed here 
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
for( var i = 0; i < data.length ; i ++){
    console.log(data[i].name +' ' + data[i].capital)
}
}