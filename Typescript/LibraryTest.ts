
import { Book } from "./Book";
import { Library } from "./Library";

let newBook1 : Book = new Book ("El libro de Hechizos", 546, "5656356-JU46464", "Andrea Daga", "Impedimenta");
let newBook2 : Book = new Book ("El Necronomicon", 200, "46474646-HU83773", "Abdul", "Humanitas");
let newBook3 : Book = new Book ("La Biblia de las Brujas", 345, "4747473-GH83838", "Janet", "Velka");

let library : Library = new Library([newBook1, newBook2, newBook3],"Rondeña", "Luka");

console.log(library);
console.log(library.getAddress);
console.log(library.getManager);
console.log(library.getNumbersOfBooks);
console.log(library.findByAuthor("Andrea Daga"));
console.log(library.setAddress("Calle Redonda 6"));
console.log(library.setManager("Locuelo"));
console.log(library.toString());








