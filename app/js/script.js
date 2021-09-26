// variables
let bookTitle = document.getElementById('title'); 
let authorName = document.getElementById('authorname');
let numPages = document.getElementById('pages');
let readit = document.getElementById('read'); 
let addBtn = document.getElementById('add-btn'); 
const bookContainer = document.getElementById('book-container');
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
  if (title === null || author === null || pages === null || read === null) {
    alert('Incomplete Forms'); 
  } else {
    book = new Book(title, author, pages, read); 
    myLibrary.push(book); 
    displayBook()
  }
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

function displayBook () {
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);   
  }
}

function createBook (item) {
  // elements
  const bookContainer = document.getElementById('book-container');
  const titleP = document.createElement('p');
  const authorP = document.createElement('p');  
  const pageP = document.createElement('p'); 
  const readButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const buttonDiv = document.createElement('div'); 
  // display object properties
  deleteButton.textContent = 'Delete'; 
  deleteButton.style.backgroundColor = 'red'; 
  readButton.textContent = item.read + "";
  titleP.textContent = '' + item.title;
  authorP.textContent = '' + item.author;  
  pageP.textContent = item.pages + ' ' + 'pages'; 
  // appending elements to book container
  bookContainer.appendChild(titleP);  
  bookContainer.appendChild(authorP); 
  bookContainer.appendChild(pageP);
  bookContainer.appendChild(buttonDiv); 
  bookContainer.classList.add('book-container');
  // button div 
  buttonDiv.appendChild(readButton);
  buttonDiv.appendChild(deleteButton);
  buttonDiv.classList.add('button-div');
  // coloring read toggle button 
  if (read === 'read') {
    readButton.style.backgroundColor = 'green'; 
  } else if (read === 'not read') {
    readButton.style.backgroundColor = 'red'; 
  }
  // button event listeners
  deleteButton.addEventListener('click', () => {
    document.getElementById(myLibrary.indexOf(item)).remove(); 
  });
  readButton.addEventListener('click', () => {
    console.log(read); 
    if (read === 'not read') {
      readButton.style.backgroundColor = 'green'; 
      readButton.textContent = 'read';
      read = 'read'; 
    } 

    if (read === 'read') {
      readButton.style.backgroundColor = 'red';
      readButton.textContent = 'not read';
      read = 'not read'; 
    }


  });
  bookContainer.setAttribute('id', myLibrary.indexOf(item));
}
