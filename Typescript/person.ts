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
            return this.name
        }
        public yearOfBirth(currentYear : Number){
            return currentYear - this.age
        }
        public setAddress(address : string):void{  
        }
        public getAddress(): String{
            return this.address;
        }
    }
