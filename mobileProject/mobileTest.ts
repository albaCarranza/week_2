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
