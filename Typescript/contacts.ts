import { Person } from "./Person";

export class Contacts{
    public people : Array<any>

    constructor(){
        this.people = []
    }
    printCalendar(){
        return this.people
    }
}

let alba = new Person ("Alba", 26, "Calle Gran Via");
let juan = new Person ("Juan", 23, "Calle Wollymolly");
let carla = new Person ("Carla", 20, "Calle Pajaritos");
let amigos = new Contacts();
amigos.people = [alba,juan,carla];
console.log(amigos.people);



