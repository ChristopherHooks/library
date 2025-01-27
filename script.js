function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.data = myLibrary[this.book];
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

//Books for testing
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const lostGods = new Book('Lost Gods', 'Brom', '300', true);
const theChildThief = new Book('The Child Thief', 'Brom', '600', true);
const slewfoot = new Book('Slewfoot', 'Brom', '545', true);

myLibrary.push(theChildThief);
myLibrary.push(theHobbit);
myLibrary.push(lostGods);
myLibrary.push(slewfoot);

showLibrary();

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
    hideForm();
}

const addNewButton = document.querySelector('.add-new-book');
addNewButton.addEventListener('click', () => {
    console.log('clicked');
    showForm();
})

const formBG = document.querySelector('.form-bg');

function showForm() {
    formBG.style.visibility = 'visible';
}

function hideForm() {
    formBG.style.visibility = 'hidden';
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    showLibrary();
}

function toggleRead(index) {
    // Toggle the read property of the selected book
    myLibrary[index].read = !myLibrary[index].read;
    showLibrary();
}

const newBook = document.getElementById('new-book');
newBook.addEventListener('click', (event) => {
    addBookToLibrary();
    showLibrary();
})

function showLibrary() {
    const libraryDiv = document.querySelector('.library');
    libraryDiv.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML =
            `<h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="pages">${book.pages} pages</p>
            <p class="read">${book.read ? 'Read' : 'Not read yet'}</p>
           <div class="buttons"><button class='btn remove'>Remove</button> <button class='btn toggle'>Read</button></div>`;

        const removeButton = bookDiv.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            removeBookFromLibrary(index);
        });

        const toggleButton = bookDiv.querySelector('.toggle');
        toggleButton.addEventListener('click', () => {
            toggleRead(index);
        })

        libraryDiv.appendChild(bookDiv);

    });

    console.log(myLibrary);

}





