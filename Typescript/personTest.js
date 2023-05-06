"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var alba = new Person_1.Person("Alba", 26, "Calle gran via");
console.log(alba.name);
console.log(alba.age);
console.log(alba.getAddress);
console.log(alba.setAddress("Calle Ronda"));
