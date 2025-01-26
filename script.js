function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages - pages;
    this.read = read;
    this.info = function info() {
        if (!this.read) {
            return `${this.title} by ${this.author}, ${pages} pages, not read yet`;
        } else {
            return `${this.title} by ${this.author}, ${pages} pages, read`;
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const lostGods = new Book('Lost Gods', 'Brom', 300, true);
const theChildThief = new Book('The Child Thief', 'Brom', 600, true ); 
const slewfoot = new Book('Slewfoot', 'Brom', 545, true);


function addBookToLibrary(book) {
    
}

function showLibrary(){
    for(const book in library){
        
    }
}

const myLibrary = [];





