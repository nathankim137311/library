// variables
const body = document.body;
// input variables
const title = document.getElementById('title'); 
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const status = document.getElementById('status'); 
const addBtn = document.getElementById('add-btn'); 
const inputs = document.querySelectorAll('input'); 
let myLibrary = [];

class Book {
  constructor() {
     this.title  = title; 
     this.author = author;
     this.pages = pages;
     this.status = status;
  }
  get info() {
    let bookInfo = [this.title, this.author, this.pages, this.status]; 
    return bookInfo; 
  }
} 

// listens for keyboard inputs and stores text data in variables

addBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  let book = new Book();
  console.log(book);
});

/*
// clear storage link
const clearStorage = document.getElementById('clear-storage'); 
clearStorage.addEventListener('click', () => {
  localStorage.clear(); 
});

// list container 
const containerDiv = document.createElement('div');
containerDiv.classList.add('book-container');  
body.appendChild(containerDiv); 

// create list
const ul = document.createElement('ul');
ul.setAttribute('id', 'book-list');
containerDiv.appendChild(ul);  
const bookList = document.getElementById('book-list'); 

// increment 
let i = 0; 

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

addBtn.addEventListener('click', (e) => {
  if (title === '' && author === '' && pages === '') {
    e.preventDefault(); 
    alert('Please fill out all input fields!'); 
  } else {
    e.preventDefault(); 
    book = new Book(title, author, pages, read); 
    myLibrary.push(book); 
    createBook(myLibrary[i]);
    i++;  
  }
});

// get books from local storage
if (localStorage.getItem('books') === null) {
  myLibrary = [];
} else {
  const booksFromStorage = JSON.parse(localStorage.getItem('books'));
  myLibrary = booksFromStorage; 
  let book = 0; 
  i = myLibrary.length; 
  while (book < myLibrary.length) {
    createBook(myLibrary[book]);
    book++;
  }
}

// book constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function createBook (item) {
  saveLocal(); 
  // new book entry
  const li = document.createElement('li');
  const bookDiv = document.createElement('div'); 
  bookDiv.setAttribute('id', myLibrary.indexOf(item)); 
  bookDiv.classList.add('book-div');
  li.appendChild(bookDiv);
  bookList.appendChild(li);
  // title
  const titleP = document.createElement('p');
  titleP.textContent = ' ' + item.title; 
  bookDiv.appendChild(titleP);
  // author 
  const authorP = document.createElement('p');
  authorP.textContent = '' + item.author;    
  bookDiv.appendChild(authorP); 
  // page
  const pageP = document.createElement('p');
  pageP.textContent = item.pages + ' ' + 'pages';
  bookDiv.appendChild(pageP);
  // read button
  const readButton = document.createElement('button');
  readButton.setAttribute('id', 'read-button');
  readButton.textContent = item.read + "";
  bookDiv.appendChild(readButton);
  if (item.read === 'read') {
    readButton.style.backgroundColor = 'green'; 
  } else if (item.read === 'not read') {
    readButton.style.backgroundColor = '#b80202';
  } else {
    readButton.style.backgroundColor = 'white'; 
    readButton.style.color = 'black'; 
  }
  readButton.addEventListener('click', (e) => {
    if (readButton.textContent === 'read') {
      readButton.style.backgroundColor = '#b80202';
      readButton.textContent = 'not read';
      item.read = 'not read';
      saveLocal(); 
    } else if (readButton.textContent === 'not read') {
      readButton.style.backgroundColor = 'green'; 
      readButton.textContent = 'read';
      item.read = 'read';
      saveLocal(); 
    }
  });
  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'delete-button'); 
  deleteButton.textContent = 'Delete'; 
  bookDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', (e) => {
    title = '';
    author = '';
    pages = '';
    read = 'read'; 
    bookDiv.classList.add('vanish');
    let index = e.target.id;
    myLibrary.splice(index, 1);
    saveLocal(); 
    i--; 
  });    
  bookDiv.addEventListener('transitionend', (e) => {
    li.remove(); 
  }); 
  // clear input value
  const resetBtn = document.getElementById('reset'); 
  inputs.forEach(input => input.value = ''); 
  resetBtn.value = 'Reset'; 
}

// save to local storage 
function saveLocal () {
  localStorage.setItem('books', JSON.stringify(myLibrary));
}
*/

