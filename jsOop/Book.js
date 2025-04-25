export class Book {
    static instances = [];
    constructor(name, bookAuthor, year) {
        this._name = name;
        this._author = bookAuthor;
        this._year = year;
        Book.instances.push(this);
    }

    printInfo() {
        console.log(`Book "${this._name}" was written by ${this._author} in the ${this._year}.`)
    }

    static getTheOldestBook() {
        if (Book.instances.length === 0) return null;
        const sorted = [...Book.instances].sort((a, b) => a._year - b._year);
        return sorted[0];
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length < 3) {
            console.log(`"${newName}" book name is too short!`);
            return;
        }
        this._name = newName;
    }

    get author() {
        return this._author;
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
        return currentYear - this._year;
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (newYear < 1800 || newYear > new Date().getFullYear()) {
            console.log(`${newYear} is an invalid year!`);
            return;
        }
        this._year = newYear;
    }
}

