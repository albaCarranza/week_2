export class Book {
    private title: String
    private nPages: Number
    private isbn: String
    private author: String
    private editorial: String
    constructor(title: String, nPages: Number, isbn: String, author: String, editorial: String) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    public getTitle(): String {
        return this.title;
    }
    public getNPages(): Number {
        return this.nPages;
    }
    public getIsbn(): String {
        return this.isbn;
    }
    public getAuthor(): String {
        return this.author;
    }
    public getEditorial(): String {
        return this.editorial;
    }
    public setNPages(newPNages: Number) {
        return this.nPages = newPNages;
    }
    public setIsbn(newIsbn: String) {
        return this.isbn = newIsbn;
    }
    public setAuthor(newAuthor: String) {
        return this.author = newAuthor;
    }
    public setEditorial(newEditorial: string) {
        return this.editorial = newEditorial;
    }
    public printAll() {
        return `title : ${this.title},${"\n"}Number Pages : ${this.nPages},${"\n"}Isbn : ${this.isbn},${"\n"}Author : ${this.author},${"\n"}Editorial : ${this.editorial}`
    }
}

let introduccionJavascript: Book = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
console.log(introduccionJavascript.printAll());


