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

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet
