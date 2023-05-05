let myContact = require("./contacts");
let myPersona = require("./person");

let amigos = new myContact.Contacts();

let roberto = new myPersona.Person("Manuel", "Garrido", 1980, 80, 1.90, ["leer", "pasear", "tocar la guitarra"]);
let leo = new myPersona.Person("Leo", "Gallardo", 1988, 70, 1.65, ["comer", "ilustrar", "costura"]);
let teresa = new myPersona.Person("Teresa", "Andrés", 1987, 55, 1.64, ["cantar", "dormir", "dibujar"]);
let luis = new myPersona.Person("Luis", "Cabrera", 1999, 74, 1.88, ["jugar a las cartas", "dormir", "correr"]);
let gabriel = new myPersona.Person("Gabriel", "Montalvo", 1987, 88, 1.92, ["programar", "jugar a videojuegos", "escuchar musica"]);

amigos.arrPerson = [roberto, leo, teresa, luis, gabriel];

console.log(amigos.arrPerson);
