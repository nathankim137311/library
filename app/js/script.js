// variables
const body = document.body;
const bookTitle = document.getElementById('title'); 
const authorName = document.getElementById('authorname');
const numPages = document.getElementById('pages');
const readit = document.getElementById('read'); 
const addBtn = document.getElementById('add-btn'); 
const inputArr = Array.from(document.querySelectorAll('input')); 
const myLibrary = [];
let title = null; 
let author = null;
let pages = null;
let read = null;  
let book = new Book(title, author, pages, read);

// event listeners (change inputs so that it sends anything inside of the input textbox)
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

let i = 0; 

addBtn.addEventListener('click', () => {
    book = new Book(title, author, pages, read); 
    myLibrary.push(book); 
    console.log(myLibrary); 
    createBook(myLibrary[i]);
    i++;  
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

function createBook (item) {
  console.log(item);
  // container div
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('book-container');  
  body.appendChild(containerDiv); 
  containerDiv.setAttribute('id', myLibrary.indexOf(item)); 
  // create list
  const ul = document.createElement('ul');
  containerDiv.appendChild(ul); 
  // list itenew book entry
  const li = document.createElement('li');
  const bookDiv = document.createElement('div'); 
  bookDiv.classList.add('book-div');
  li.appendChild(bookDiv);
  ul.appendChild(li);
  // book properties 
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
  readButton.addEventListener('click', () => {
    if (readButton.textContent === 'read') {
      readButton.style.backgroundColor = '#b80202';
      readButton.textContent = 'not read'; 
    } else if (readButton.textContent === 'not read') {
      readButton.style.backgroundColor = 'green'; 
      readButton.textContent = 'read'; 
    }
  });
   // delete button
   const deleteButton = document.createElement('button');
   deleteButton.setAttribute('id', 'delete-button'); 
   deleteButton.textContent = 'Delete'; 
   bookDiv.appendChild(deleteButton);
   deleteButton.addEventListener('click', () => {
   document.getElementById(myLibrary.indexOf(item)).remove();
   });  
   // clear input value
   inputArr.value = ''; 
}
