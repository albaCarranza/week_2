let myLib = require("./person")
class Contacts {
    constructor(){
        this.arrPerson = []

    }
    printAll(){
        return this.arrPerson
    }


}
module.exports = {Contacts}