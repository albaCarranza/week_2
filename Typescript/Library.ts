import { Book } from "./Book"

export class Library {
    private books: Array<any>
    private address: String
    private manager: String

    constructor(books: Array<any>, address: string, manager: string) {
        this.books = books
        this.address = address
        this.manager = manager
    }

    public getBooks(): Array<any> {
        return this.books
    }

    public getAddress(): String {
        return this.address
    }

    public getManager(): String {
        return this.manager
    }

    public setAddress(address: String): void {
        this.address = address;
    }

    public setManager(manager: String): void {
        this.manager = manager;
    }

    public toString(): String {
        let i: number = 0
        let x: string = ""
        for (i = 0; i < this.books.length; i++) {
            x = x + "Book" + i + ": \n" + this.books[i].printAll()
        }
        return x;
    }

    public getNumbersOfBooks(books: Number) {
        return this.books.length;
    }
    
    public findByAuthor(author: String): Book[] {
        let librosAutor: Book[] = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                librosAutor.push(this.books[i])
            }
        }
        return librosAutor;
    }
}

