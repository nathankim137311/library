// book class  

/*
const person = {
  firstName: 'Nathan',
  lastName: 'Kim', 
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  } 
};
*/


class Book {
    constructor() {
        this.title  = prompt('title?', 'enter book title');
        this.author = prompt('author?', 'enter a name');
        this.pages = prompt('how many pages?', 'enter a number');
        this.read = prompt('have you read this book?').toLowerCase();
    }
}

let book = new Book (); 
console.log(book);


/*
// book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

// input variables
let title = ''; 
let author = '';
let pages = '';
let read = 'read';  
let book = new Book(title, author, pages, read);

// event listeners
bookTitle.addEventListener('input', () => {
    title = bookTitle.value;
  });
   
  authorName.addEventListener('input', () => {
    author = authorName.value;
  });
  
  numPages.addEventListener('input', () => {
    pages = numPages.value;
  });
  
  readit.addEventListener('input', () => {
    read = readit.value;
  }); 
*/