"use strict";
// Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getmodel = function () {
        return this.model;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setmodel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setcolor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setprice = function (price) {
        this.price = price;
    };
    Mobile.prototype.toString = function () {
        console.log("\n\n“The characteristics of the mobile name are:”\n");
        console.log("Name: " + this.name);
        console.log("Trademark: " + this.trademark);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
        console.log("Price: " + this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
