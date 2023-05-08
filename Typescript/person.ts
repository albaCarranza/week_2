export class Person {
   
    public name: String;
    public age: Number;
    private address: String;

    constructor(name:String, age:Number, address:String){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public printName(){
        console.log(this.name);
    }

    public yearOfBirth(currentYear: Number): Number{
        return Number(currentYear) - Number(this.age); // Para que no cante el compilador de ts
    }

    public getAddress(): String{
        return this.address;
    }
    
    public setAddress(address : string){  
        this.address = address;
    }
}
