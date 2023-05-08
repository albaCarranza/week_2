import { Person } from "./Person";

export class Contacts{
    public people : Array<Person>

    constructor(){
        this.people = []
    }

    printCalendar() {
        console.log(this.people)
    }
}