// 2. Crear la Clase Person con la siguiente estructura:

// • Atributos Públicos:
// - name: string
// - age: number

class Person {
   
    public name: String;
    public age: Number;
    private address: String;

    constructor(name:String, age:Number, address:String)
    
        public printName(){
            return this.name
        }
        public yearOfBirth(currentYear : Number){
            return currentYear - this.age
        }
        public setAddress(address : string){
            return this.address;
        }
        public getAddress(): String{
            return this.address;
        }
    }
    