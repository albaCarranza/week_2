
import { Vector } from "./Vector";

// Declaro el vector origen
let vectorOrigen : Vector = new Vector(10, 5);

console.log('----Imprime el vector----');
vectorOrigen.print();

// Declaro otro vector para las operaciones
let vectorSecundario : Vector = new Vector(10, 5);
console.log('----Imprime el secundario ----');
vectorSecundario.print();


console.log('----Imprime la suma ----');
console.log(vectorOrigen.add(vectorSecundario.getElements()));

console.log('----Imprime la resta ----');
console.log(vectorOrigen.subs(vectorSecundario.getElements()));

console.log('----Imprime la multiplicación ----');
console.log(vectorOrigen.mult(vectorSecundario.getElements()));

console.log('----Imprime el producto ----');
console.log(vectorOrigen.multNumb(10));
