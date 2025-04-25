import { Book } from "./Book.js"
import { EBook } from "./EBook.js"

const fictionBook = new Book("The Gatsby", "F. Scott Fitzgerald", 1925);
fictionBook.printInfo();

const dystopiaBook = new Book("Brave New World", "Aldous Huxley", 1932);
dystopiaBook.printInfo();

const philosophyBook = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 2016);
philosophyBook.printInfo();


const ebook = new EBook("The Girl with the Dragon Tattoo", "Stieg Larsson", 2005, "PDF");
ebook.printInfo();


//Example of using getters and setters
console.log(fictionBook.name);
console.log(dystopiaBook.author);
console.log(philosophyBook.age);
console.log(ebook.format);

fictionBook.name = "A";

dystopiaBook.author = "";

philosophyBook.year = 2026;
ebook.year = 1700;

ebook.format = "EPUBB"

const oldestBook = Book.getTheOldestBook();
console.log(oldestBook);

const allEBooks = EBook.getAllAsEBooks("EPUB");
allEBooks.forEach(ebook => ebook.printInfo());
