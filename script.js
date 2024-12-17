//task1

const person = {
    name: "Ganna",
    age: 35,
    city: "Almaty"
};
console.log(person)


//task2 
console.log(person.name);
console.log(person.age);

person.city = "LA"
console.log(person.city);


//task3

person.greet = function() {
    console.log(`My name is  ${person.name}. I'm" ${person.age} years old`) 
}

person.greet()


//task4

obj1 = { a: 10, b: 20 };

obj2 = { a: 10, b: 20 };

console.log(obj1 == obj2); 
console.log(obj1 === obj2);

//Oba operatora vozvrashaut false potomu chto daje esli ob'ekty imeut odinakovye znachemiya i svoistva oni vse ravno schitautsya raznymi


//task5
 const book = {
    title: "Shantaram",
    author: "Roberts",
    details: {
        year: 2000,
        pages: 1000,
    }
 }

 const book2 = Object.assign({}, book)
 console.log(book2)

 //Ob'ekty kopiruutsya possylke a ne po znacheniu, to est' lubye izmeneniya budut otrajatsya v drugom

 book.details.year = 2010
 console.log(book2)


 //task6

 const calculator = {
    a: 10,
    b: 20,
    sum() {
    return this.a + this.b;
 },

multiply() {
return this.a * this.b;
 }
}

console.log(calculator.sum())
console.log(calculator.multiply())


//task7

const car = {
    brand: "BMW",
    model: 2024,
}

car.brand = "Mersedes"
console.log(car)

//vnutri konstanty mojno izmenyat svoistva i znacheniya, no samu konstantu izmenit nelzya