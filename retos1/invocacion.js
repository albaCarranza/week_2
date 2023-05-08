"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buclesFor_1 = require("./buclesFor");
var condicionales_1 = require("./condicionales");
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
var arr1 = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
var arr2 = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil'];
var arr3 = ['Venezuela', 'Veneno', 'Voltaje'];
console.log('---Resultado de Invocaciones----');
var sumaArr1 = (0, buclesFor_1.add)(arr1);
(0, condicionales_1.isEven)(sumaArr1);
var sumaArr2 = (0, buclesFor_1.add)(arr2);
(0, condicionales_1.isEven)(sumaArr2);
var sumaArr3 = (0, buclesFor_1.add)(arr3);
(0, condicionales_1.isEven)(sumaArr3);
