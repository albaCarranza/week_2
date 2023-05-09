"use strict";
// Dicho fichero debe contener la clase Point con los siguientes atributos privados:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        console.log("(" + this.x + "," + this.y + ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(((this.x - 0) ^ 2) + ((this.y - 0) ^ 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt(((this.x - anotherPoint.getX()) ^ 2) + ((this.y - anotherPoint.getY()) ^ 2));
    };
    return Point;
}());
exports.Point = Point;
