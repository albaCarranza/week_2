// • Guardar la clase Person en un fichero con extensión .js (person.js).
// • Modificar ese fichero para exportar la clase.

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
let manuel = new Person("Manuel", "Gallardo", 1996, 80, 190, ["comer", "dormir", "dibujar"])
console.log(manuel);
console.log(manuel.calEdad(2023));


module.exports = {Person}