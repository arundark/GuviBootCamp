//Solving problems using array functions on rest countries data
const req = new XMLHttpRequest;
req.open('GET','https://restcountries.com/v3.1/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(data);
    //a.Get all the countries from Asia continent /region using Filter function
    let asiaContinentCountries = data.filter(countries => countries.region === 'Asia');
    console.log(asiaContinentCountries)

    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    let populationLessThan2Lakhs = data.filter(countries => countries.population < 2_00_000);
    console.log(populationLessThan2Lakhs);

    //c.Print the following details name, capital, flag using forEach function
     data.forEach(element => {
        console.log(element.name.common, element.capital, element.flag);
    });

    //d.Print the total population of countries using reduce function
    let totalPopulation = data.reduce(
        (previousValue, currentValue) => previousValue+currentValue.population);
    console.log(totalPopulation);

    //f.Print the country which uses US Dollars as currency
    // let usDollarCountries = data.filter(countries => countries.currencies);
    // console.log(usDollarCountries)
    }