"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Person_1 = require("./Person");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        return this.people;
    };
    return Contacts;
}());
exports.Contacts = Contacts;
var alba = new Person_1.Person("Alba", 26, "Calle Gran Via");
var juan = new Person_1.Person("Juan", 23, "Calle Wollymolly");
var carla = new Person_1.Person("Carla", 20, "Calle Pajaritos");
var amigos = new Contacts();
amigos.people = [alba, juan, carla];
console.log(amigos.people);
