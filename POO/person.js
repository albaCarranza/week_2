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
        console.log(`nombre : ${this.nombre}-${"\n"}apellido : ${this.apellido}-${"\n"}anyoNacimiento : ${this.anyoNacimiento}-${"\n"}weight : ${this.peso}-${"\n"}height : ${this.altura}-${"\n"}hobbies : ${this.hobbies}`);
    }
    printHobbies(){
        console.log(this.hobbies);
    }
}
let manuel = new Person("Manuel", "Gallardo", 1996, 80, 1.90, ["comer", "dormir", "dibujar"])
// console.log(manuel);
// console.log(manuel.calEdad(2023));
manuel.printAll();
console.log(manuel.calEdad(2023));
console.log(manuel.calIMC(80,1.90));


module.exports = {Person}