// DOM elements 
const body = document.body;
// list container 
const containerDiv = document.createElement('div');
body.appendChild(containerDiv); 
containerDiv.classList.add('book-container');  
// create list
const ul = document.createElement('ul');
ul.setAttribute('id', 'book-list');
containerDiv.appendChild(ul);  
const bookList = document.getElementById('book-list'); 
// buttons 
const clearStorageBtn = document.getElementById('clear-storage'); 
const addBtn = document.getElementById('add-btn'); 
const resetBtn = document.getElementById('reset')
// input variables
const titleInput = document.getElementById('title'); 
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const statusInput = document.getElementById('status'); 
// arrays 
const inputs = Array.from(document.querySelectorAll('input')); 
let myLibrary = [];
// iterator 
let index = 0;

// creates multiple book objects 
class Book {
  constructor() {
    this.title = titleInput.value;
    this.author = authorInput.value;
    this.pages = pagesInput.value;
    this.status = statusInput.value;
  }
} 

// clears input fields 
function clearInputs() {
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].value = ''; 
  }
  resetBtn.value = 'Reset'; 
}

// prevents form from submitting, calls functions
addBtn.addEventListener('click', () => {
  let i = 0;
    if (inputs[i].value === '' || inputs[i].value === null) {
      alert('please fill out all fields');
      i++; 
    } else {
      getBooks();
      clearInputs(); 
  }
});

// creates new book object and stores it in myLibrary
function getBooks() {
  const book = new Book(); 
  myLibrary.push(book); 
  createBook(myLibrary[index]);
  index++;
}

function createBook (book) {
  saveLocal(); 
  // new book entry
  const li = document.createElement('li');
  const bookDiv = document.createElement('div'); 
  bookDiv.setAttribute('id', myLibrary.indexOf(book)); 
  bookDiv.classList.add('book-div');
  li.appendChild(bookDiv);
  bookList.appendChild(li);
  // title
  const titleP = document.createElement('p');
  titleP.textContent = ' ' + book.title; 
  bookDiv.appendChild(titleP);
  // author 
  const authorP = document.createElement('p');
  authorP.textContent = ' ' + book.author;    
  bookDiv.appendChild(authorP); 
  // page
  const pageP = document.createElement('p');
  pageP.textContent = book.pages + ' ' + 'pages';
  bookDiv.appendChild(pageP);
  // read button
  const readButton = document.createElement('button');
  readButton.setAttribute('id', 'read-button');
  readButton.textContent = book.status + "";
  bookDiv.appendChild(readButton);
  if (book.status === 'read') {
    readButton.style.backgroundColor = 'green'; 
  } else if (book.status === 'not read') {
    readButton.style.backgroundColor = '#b80202';
  } else {
    readButton.style.backgroundColor = 'white'; 
    readButton.style.color = 'black'; 
  }
  readButton.addEventListener('click', () => {
    if (readButton.textContent === 'read') {
      readButton.style.backgroundColor = '#b80202';
      readButton.textContent = 'not read';
      book.status = 'not read';
      saveLocal(); 
    } else if (readButton.textContent === 'not read') {
      readButton.style.backgroundColor = 'green'; 
      readButton.textContent = 'read';
      book.status = 'read';
      saveLocal(); 
    }
  });
  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'delete-button'); 
  deleteButton.textContent = 'Delete'; 
  bookDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', (e) => {
      bookDiv.classList.add('vanish');
      let id = e.target.id;
      myLibrary.splice(id, 1);
      saveLocal(); 
      index--; 
  });    
  bookDiv.addEventListener('transitionend', (e) => {
    li.remove(); 
  }); 
}

// save to local storage 
function saveLocal () {
  localStorage.setItem('books', JSON.stringify(myLibrary));
}

// get books from local storage
if (localStorage.getItem('books') === null) {
  myLibrary = [];
} else {
  const booksFromStorage = JSON.parse(localStorage.getItem('books'));
  myLibrary = booksFromStorage; 
  let books = 0; 
  index = myLibrary.length; 
  while (books < myLibrary.length) {
    createBook(myLibrary[books]);
    books++;
  }
}

// clears local storage
clearStorageBtn.addEventListener('click', () => {
  localStorage.clear(); 
  location.reload(); 
});


