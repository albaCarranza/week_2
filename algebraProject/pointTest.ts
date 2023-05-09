import { Point } from "./point";

let myPoint : Point = new Point(4, 8);

console.log("----Prbando metodos de Point------")
myPoint.toString();

myPoint.setX(10);
console.log(myPoint.getX());

myPoint.setY(25);
console.log(myPoint.getY());