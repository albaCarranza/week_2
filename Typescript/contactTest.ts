import { Contacts } from "./contacts";
import { Person } from "./Person";

let alba = new Person("Alba", 26, "Calle Gran Via");
let juan = new Person("Juan", 23, "Calle Wollymolly");
let carla = new Person("Carla", 20, "Calle Pajaritos");
let amigos = new Contacts();

// Asigno las personas a los contactos
amigos.people = [alba, juan, carla];

// Muestro por pantalla los contactos
amigos.printCalendar();