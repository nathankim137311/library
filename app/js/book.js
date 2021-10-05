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

// addBtn.addEventListener('click', (e) => {
//   let book = new Book();
//   e.preventDefault();
// });
// 
// 
// addBtn.addEventListener('click', (e) => {
//   if (title === '' && author === '' && pages === '') {
//     e.preventDefault(); 
//     alert('Please fill out all input fields!'); 
//   } else {
//     e.preventDefault(); 
//     book = new Book(title, author, pages, read); 
//     myLibrary.push(book); 
//     createBook(myLibrary[i]);
//     i++;  
//   }
// });


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