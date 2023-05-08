let myLib = require("./person")

class Contacts {
    constructor() {
        this.arrPerson = []
    }

    printPersons() {
        for(let element of this.arrPerson){
            element.printAll();
        };
    }
}


module.exports = { Contacts }