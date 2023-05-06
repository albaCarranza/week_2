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
            return this.name;
        }
        public yearOfBirth(currentYear : Number){
            return currentYear - this.age;
        }
        public getAddress(): String{
            return this.address;
        }
        public setAddress(newAddress : string){  
            return this.address = newAddress;
        }
}
