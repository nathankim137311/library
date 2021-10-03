// book class  

class Book {
    // properties 
    title = ''; 
    author = '';
    pages = '';
    read = 'read';  
    // constructor 
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = function() {
            return 'I have not read' + ' ' + this.title;  
        }
    }
    //set title() {
    //      
    //}
}

let book = new Book('Sorceror\'s stone', 'J.K. Rowling', '9000', "have not read"); 
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