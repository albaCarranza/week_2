// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”

let myLib = require("./person")

let juan = new myLib.Person("Juan", "Gallardo", 1994, 70, 1.80, ["correr", "dormir", "dibujar"])

// Imprimir todos los datos de Juan
console.log('-----Todos los datos------')
juan.printAll();

// Edad de la persona
console.log('-----Edad------')
console.log(juan.calEdad(2023));

// IMC de la persona
console.log('-----IMC------')
console.log(juan.calIMC(70,1.80));

// Iprime los hobbies de la persona
console.log('-----Hobbies------')
juan.printHobbies();
