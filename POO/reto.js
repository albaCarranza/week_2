// RETO 1===============================================================================
// 1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas
// “dia1”, “dia2” etc..
// 2. Para los retos de hoy trabajaremos desde la rama “dia1”.
// 3. Crea una carpeta llamada POO, donde guardaremos todos los retos de hoy.
// 4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.

// RETO 2===============================================================================
// Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
// (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
// clase.

// RETO 3===============================================================================
// Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
// como parámetro el año y calcule la edad de la persona.
// Reto 4
// Añadir un método que se denomine printAll que muestre por consola cada uno de los
// atributos de la clase Person seguido por “-” y el valor del atributo.

// Reto 5===============================================================================
// Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
// denominado printHobbies, que muestre por consola las aficiones de la persona.

class Person {

    constructor(name, surename, birth, weight, height, hobbies){
        this.nombre = name
        this.apellido = surename
        this.peso = weight
        this.altura = height
        this.anyoNacimiento = birth
        this.imc = this.calIMC()
        this.edad = this.calEdad(2023)
        this.all = this.printAll()
        this.hobbies = hobbies
    }

    

    // metodos
    calIMC(){
        return (this.peso/(this.altura*this.altura))
    }
    calEdad(curretYear){
        return curretYear - this.anyoNacimiento
    }
    printAll(){
        return `${this.nombre}${"-"}${this.apellido}${"-"}${this.peso}${"-"}${this.altura}${"-"}${this.anyoNacimiento}${"-"}${this.edad}`
    }
    printHobbies(){
        return []
    }
}

let manuel = new Person("Manuel", "Gallardo", 1996, 80, 1.90, ["comer", "dormir", "dibujar"])
console.log(manuel);
console.log(manuel.calEdad(2023));



//metodo printAll Person
// console.log();


// RETO 6 ==================================================================================
// • Guardar la clase Person en un fichero con extensión .js (person.js).
// • Modificar ese fichero para exportar la clase.
// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”

// RETO 7 ==================================================================================
// • Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
// de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.
// • El constructor de la clase Contacts no debe tener parámetros de entrada pero debe
// inicializar el array.
// • Crear un método llamado printPersons que imprima cada uno de los atributos de cada
// objeto Person.

class Contacts {
    constructor(){
        this.arrObject = ;
    }
    //metodos

}














// RETO 8 ==================================================================================
// • Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
// • Modificar ese fichero para exportar la clase. Importar la clase en otro fichero denominado
// contactsTest.js.
// • Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1” y después haz ”merge” con tu rama
// “master/main”. En caso de tener conflicto soluciónalos.
// • Haz una versión de esta subida.

