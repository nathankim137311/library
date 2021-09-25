console.log('hello everybody');




// object constructor 
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return title + ' ' + 'by' + ' ' + author + ',' + ' ' + pages + ',' + ' ' + read; 
  }
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '296 pages', 'not read yet'); 

console.log(theHobbit.info()); 