import { Mobile } from "./mobile";

let xiaomi : Mobile = new Mobile("redmi note", "xiamoi", "10 pro", "azul", 300)

xiaomi.setName('Redmi')
console.log(xiaomi.getName());

xiaomi.setTrademark('Mi')
console.log(xiaomi.getTrademark());

xiaomi.setmodel('12 plus ultra');
console.log(xiaomi.getmodel());

xiaomi.setcolor('red');
console.log(xiaomi.getcolor());

xiaomi.setprice(350);
console.log(xiaomi.getprice());

console.log('-----RETO 2: Añadir nuevo metodo------');
let phone1 : Mobile = new Mobile("redmi note", "xiamoi", "10 pro", "azul", 300)
let phone2 : Mobile = new Mobile("galaxy", "samsung", "s22 pro", "metal", 1300)
let phone3 : Mobile = new Mobile("iPhone", "apple", "14 pro", "grafite", 2000)

let myMobiles = [phone1, phone2, phone3];

for(let mobile of myMobiles) {
    mobile.toString()
}