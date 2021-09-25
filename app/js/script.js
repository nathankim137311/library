// variables
let bookTitle = document.getElementById('title'); 
let authorName = document.getElementById('authorname');
let numPages = document.getElementById('pages');
let readit = document.getElementById('read'); 
let addBtn = document.getElementById('add-btn'); 
let myLibrary = [];
let title = null; 
let author = null;
let pages = null;
let read = null;  
let book = new Book(title, author, pages, read);

// let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '296 pages', 'not read yet'); 

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


addBtn.addEventListener('click', () => {
  book = new Book(title, author, pages, read); 
  addBookToLibrary();
  displayBook()
  console.log(book.info()); 
  console.log(myLibrary);
});

// book constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return title + ' ' + 'by' + ' ' + author + ',' + ' ' + pages + ',' + ' ' + read; 
  }
}

function addBookToLibrary() {
    myLibrary.push(book); 
}

