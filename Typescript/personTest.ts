import { Person } from "./Person";

let alba : Person = new Person ("Alba", 26, "Calle gran via")

console.log('-----Nombre------')
alba.printName();

console.log('-----Nacimiento-----')
console.log(alba.yearOfBirth(2023));


console.log('------Dirección-----');
console.log(alba.getAddress());


console.log('------Establezco dirección y la imprimo para ver el cambio-----')
alba.setAddress("Narnia")
console.log(alba.getAddress());