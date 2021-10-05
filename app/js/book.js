// object oriented programming (oop)

// object literal makes a single book

/*
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};
*/

/*
// object constructors makes multiple books
function Book() {
  this.title = title; 
  this.author = author;
  this.year = year; 
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1.getSummary()); 
*/

/*
// working with prototypes 
function Book(title, author, year) {
  this.title = title; 
  this.author = author;
  this.year = year; 
}

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`; 
}

// Revise / Change Year 
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true; 
}

// getSummary 
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2);
book2.revise('2021');
console.log(book2);
*/

/*
// working with inheritance 

// Constructor
function Book(title, author, year) {
  this.title = title; 
  this.author = author;
  this.year = year; 
}

// prototype
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// use Magazine Constructor 
Magazine.prototype.constructor = Magazine; 

console.log(mag1);
*/

/*
// Object of prototypes 
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`; 
  }
}

// create Object 
//const book1 = Object.create(bookProtos);
//book1.title = 'Book One';
//book1.author = 'John Doe';
//book1.year = '2013';

// instead... 
const book1 = Object.create(bookProtos, {
  title:{ value: 'Book One' },
  author: {value: 'John Doe'},
  year: { value: '2013'}
});

// these both output the same result 
console.log(book1); 
*/

/*
// ES6 Classes 
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 
  }
  // object prototype
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year); 
    this.month = month; 
  }
}

// instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2014', 'Jan'); 

console.log(mag1.getSummary()); 

// instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1.getSummary()); 
console.log(book1);
*/

class Person {
  constructor(firstName, LastName, age, city) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.age = age;
    this.city = city;
  }
  getBio() {
    return `${this.firstName} ${this.LastName} is ${this.age} years old and lives in ${this.city}`
  }
}

class Worker extends Person {
  constructor(firstName, LastName, age, city, occupation) {
    super(firstName, LastName, age, city);
    this.occupation = occupation; 
  }
}

const jared = new Worker('Jared', 'Smithies', '35', 'Los Angeles', 'Web-Developer')
console.log(jared); 
console.log(jared.getBio()); 

const kim = new Person('Nathan', 'Kim', '21', 'Seattle');
console.log(kim);
console.log(kim.getBio()); 