"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var xiaomi = new mobile_1.Mobile("redmi note", "xiamoi", "10 pro", "azul", 300);
xiaomi.setName('Redmi');
console.log(xiaomi.getName());
xiaomi.setTrademark('Mi');
console.log(xiaomi.getTrademark());
xiaomi.setmodel('12 plus ultra');
console.log(xiaomi.getmodel());
xiaomi.setcolor('red');
console.log(xiaomi.getcolor());
xiaomi.setprice(350);
console.log(xiaomi.getprice());
console.log('-----RETO 2: Añadir nuevo metodo------');
var phone1 = new mobile_1.Mobile("redmi note", "xiamoi", "10 pro", "azul", 300);
var phone2 = new mobile_1.Mobile("galaxy", "samsung", "s22 pro", "metal", 1300);
var phone3 = new mobile_1.Mobile("iPhone", "apple", "14 pro", "grafite", 2000);
var myMobiles = [phone1, phone2, phone3];
for (var _i = 0, myMobiles_1 = myMobiles; _i < myMobiles_1.length; _i++) {
    var mobile = myMobiles_1[_i];
    mobile.toString();
}
