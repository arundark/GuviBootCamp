class Movie {
    constructor(title, studio, rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies){
        return movies.filter(movie => movie.rating == 'PG');
    }
}

const movie1 = new Movie('Avengers', 'Marvel');
const movie2 = new Movie('IronMan', 'Marvel', 'PG13');
const movie3 = new Movie('Thor', 'Marvel', 'PG');

const result = movie1.getPG([movie1,movie2,movie3]);
console.log(result);


//Circle - Class
class Circle {
    Circle(radius){
        this.radius = radius;
    }
    Circle(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radius(){
        return this.radius;
    }
    set radius(radius){
        this.radius = radius;
    }
    get color(){
        return this.color;
    }
    set color(color){
        this.color = color;
    }
    
}