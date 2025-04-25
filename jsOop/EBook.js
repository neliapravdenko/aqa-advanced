import { Book } from "./Book.js"

export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._format = fileFormat;
    }

    printInfo() {
        console.log(`E-Book "${this.name}" was written by ${this.author} in ${this.year}, format: ${this._format}.`);
    }

    static getAllAsEBooks(format = "PDF") {
        return Book.instances.map(book => EBook.toEBook(book, format));
    }

    static toEBook(book, format) {
        return new EBook(book.name, book.author, book.year, format);
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        const allowed = ["EPUB", "PDF", "MOBI", "Paperback", "Hardcover"];
        if (!allowed.includes(newFormat)) {
            console.log(`${newFormat} is not relevant book format!`);
            return;
        }
        this._format = newFormat;
    }
}

