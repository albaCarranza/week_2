import { add } from "./buclesFor";
import { isEven } from "./condicionales";

// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:

let arr1 = ['Casa', 'Coche', 'Ciudad', 'Cesta']
let arr2 = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil']
let arr3 = ['Venezuela', 'Veneno', 'Voltaje']

console.log('---Resultado de Invocaciones----')
let sumaArr1 = add(arr1);
isEven(sumaArr1);

let sumaArr2 = add(arr2);
isEven(sumaArr2);

let sumaArr3 = add(arr3);
isEven(sumaArr3);