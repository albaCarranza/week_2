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
        var x = this.x - 0;
        var y = this.y - 0;
        return Math.sqrt(x * x + y * y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var x = this.x - anotherPoint.x;
        var y = this.y - anotherPoint.y;
        return Math.sqrt(x * x + y * y);
    };
    Point.prototype.calculateQuadrant = function () {
        var resultado = -1;
        if (this.x == 0 || this.y == 0) {
            resultado = 0;
        }
        if (this.x > 0 && this.y > 0) {
            resultado = 1;
        }
        if (this.x < 0 && this.y > 0) {
            resultado = 2;
        }
        if (this.x < 0 && this.y < 0) {
            resultado = 3;
        }
        if (this.x > 0 && this.y < 0) {
            resultado = 4;
        }
        return resultado;
    };
    Point.prototype.calculateNearest = function (points) {
        var min = 9999999999999999999;
        var posicion = -1;
        for (var i = 0; i < points.length; i++) {
            var distancia = this.calculateDistance(points[i]);
            if (distancia < min) {
                min = distancia;
                posicion = i;
            }
        }
        return posicion;
    };
    return Point;
}());
exports.Point = Point;
