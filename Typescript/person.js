"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (newAddress) {
        return this.address = newAddress;
    };
    return Person;
}());
exports.Person = Person;
