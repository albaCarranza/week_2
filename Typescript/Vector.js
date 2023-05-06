"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.n = n;
        this.k = k;
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(~~(Math.random() * k));
        }
    }
    Vector.prototype.print = function () {
        return this.elements;
    };
    Vector.prototype.add = function (v1) {
        var i = 0;
        var v = [];
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] + v1[i]);
        }
        return v;
    };
    Vector.prototype.subs = function (v1) {
        var i = 0;
        var v = [];
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] - v1[i]);
        }
        return v;
    };
    Vector.prototype.mult = function (v1) {
        var i = 0;
        var v = [];
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] * v1[i]);
        }
        return v;
    };
    Vector.prototype.multNumb = function (n) {
        var i = 0;
        var v = [];
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] * n);
        }
        return v;
    };
    return Vector;
}());
exports.Vector = Vector;
