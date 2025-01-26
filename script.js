function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info() {
        if (!this.read) {
            return `${this.title} by ${this.author}, ${pages} pages, not read yet`;
        } else {
            return `${this.title} by ${this.author}, ${pages} pages, read`;
        }
    }
}

//Create Library
const myLibrary = [];

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);

}

const newBook = document.getElementById('new-book');
newBook.addEventListener('click', (event) => {

    event.preventDefault();
    addBookToLibrary();
})


function showLibrary() {
    
}




//Books for testing
// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
// const lostGods = new Book('Lost Gods', 'Brom', '300', true);
// const theChildThief = new Book('The Child Thief', 'Brom', '600', true);
// const slewfoot = new Book('Slewfoot', 'Brom', '545', true);


