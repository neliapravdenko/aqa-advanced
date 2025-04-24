import { Book } from "./Book.js"

export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._format = fileFormat;
    }

    printInfo() {
        console.log(`E-Book "${this.name}" was written by ${this.author} in ${this.year}, format: ${this._format}.`);
    }

    get format() {
        return `EBook is available in ${this._format} format!`
    }

    set format(newFormat) {
        const allowed = ["EPUB", "PDF", "MOBI", "Paperback", "Hardcover"];
        if (!allowed.includes(newFormat)) {
            console.log(`${newFormat} is not relevant book format!`);
            return;
        }
        this._format = newFormat;
    }

    static get supportedFormats() {
        return ["EPUB", "PDF", "MOBI"];
    }
}

