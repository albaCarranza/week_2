"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setNPages = function (newPNages) {
        return this.nPages = newPNages;
    };
    Book.prototype.setIsbn = function (newIsbn) {
        return this.isbn = newIsbn;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        return this.author = newAuthor;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        return this.editorial = newEditorial;
    };
    Book.prototype.printAll = function () {
        return "title : ".concat(this.title, ",").concat("\n", "Number Pages : ").concat(this.nPages, ",").concat("\n", "Isbn : ").concat(this.isbn, ",").concat("\n", "Author : ").concat(this.author, ",").concat("\n", "Editorial : ").concat(this.editorial);
    };
    return Book;
}());
exports.Book = Book;
var introduccionJavascript = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
console.log(introduccionJavascript.printAll());
