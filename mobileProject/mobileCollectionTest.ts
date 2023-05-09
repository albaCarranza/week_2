import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let phone1 : Mobile = new Mobile("redmi note", "xiamoi", "10 pro", "azul", 300)
let phone2 : Mobile = new Mobile("galaxy", "samsung", "s22 pro", "metal", 1300)
let phone3 : Mobile = new Mobile("iPhone", "apple", "14 pro", "grafite", 2000)
let phone4 : Mobile = new Mobile("p50 duo", "honor", "ultra max", "purple", 200)

let myMobiles = [phone1, phone2, phone3, phone4];

let myCollection : MobileCollection = new MobileCollection(myMobiles);

console.log('---Total de todos los mobiles---')
console.log(myCollection.getTotalPrice());

console.log('---PrintCollection de todos los mobiles---')
myCollection.printCollection();