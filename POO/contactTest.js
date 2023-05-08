let myContact = require("./contacts");
let myPersona = require("./person");

// Declaro contact
let contacts = new myContact.Contacts();

// Declaro personas
let luis = new myPersona.Person("Luis", "Cabrera", 1999, 74, 1.88, ["jugar a las cartas", "dormir", "correr"]);
let gabriel = new myPersona.Person("Gabriel", "Montalvo", 1987, 88, 1.92, ["programar", "jugar a videojuegos", "escuchar musica"]);

// Añado las personas al array de personas de contact
contacts.arrPerson.push(luis)
contacts.arrPerson.push(gabriel)

// Imprimo por pantalla los atributos de la personas
contacts.printPersons();