console.log('hello everybody');

let addNewBookBtn = document.getElementById('new-book'); 
let myLibrary = []; 
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '296 pages', 'not read yet'); 

addNewBookBtn.addEventListener('click', () => {
  console.log('button pressed');
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
  // do stuff here 
}
