// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”

let myLib = require("./person")

let Juan = new myLib.Person("Juan", "Gallardo", 1994, 70, 1.80, ["correr", "dormir", "dibujar"])

manuel.printAll();
console.log(Juan.calEdad(2023));
console.log(Juan.calIMC(70,1.80));
console.log(this.hobbies);


// console.log(Juan);