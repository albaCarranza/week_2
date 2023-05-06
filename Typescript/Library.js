"use strict";
// import { Book } from "./Book"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddress = function (newAddress) {
        return this.address = newAddress;
    };
    Library.prototype.setManager = function (newManager) {
        return this.manager = newManager;
    };
    Library.prototype.toString = function () {
        var i = 0;
        var x = "";
        for (i = 0; i < this.books.length; i++) {
            x = x + "Book" + i + ": \n" + this.books[i].printAll();
        }
        return x;
    };
    Library.prototype.getNumbersOfBooks = function (books) {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var librosAutor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                librosAutor.push(this.books[i]);
            }
        }
        return librosAutor;
    };
    return Library;
}());
exports.Library = Library;
