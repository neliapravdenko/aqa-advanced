export class Book {
    constructor(name, bookAuthor, year) {
        this._name = name;
        this._author = bookAuthor;
        this._year = year;
    }

    printInfo() {
        console.log(`Book "${this._name}" was written by ${this._author} in the ${this._year}.`)
    }



    get name() {
        return `${this._name} (book name in lowercase: ${this._name.toLowerCase()})`;
    }

    set name(newName) {
        if (newName.length < 3) {
            console.log(`"${this._name}" book name is too short!`);
            return;
        }
        this._name = newName;
    }

    get author() {
        return `The ${this._name} book author's name written in upper case is: ${this._author.toUpperCase()}`;
    }

    set author(newAuthor) {
        if (newAuthor === "") {
            console.log(`Author of the book "${this._name}" set to "Anonymous"`);
            this._author = "Anonymous";
            return;
        }
        this._author = newAuthor;
    }

    get age() {
        const currentYear = new Date().getFullYear();
        const bookAge = currentYear - this._year;
        return `The book "${this._name}" was written ${bookAge} years ago.`;
    }

    set year(newYear) {
        if (newYear < 1800 || newYear > new Date().getFullYear()) {
            console.log(`${newYear} is an invalid year!`);
            return;
        }
        this._year = newYear;
    }
}

