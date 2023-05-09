import { Triangle } from "./triangle";
import { Point } from "./point";

console.log("----Calcular lados de un triángulo------")
let point1 : Point = new Point(0, 0);
let point2 : Point = new Point(10, 20);
let point3 : Point = new Point(20, 0);

let myTriangle : Triangle = new Triangle(point1, point2, point3);

console.log(myTriangle.calculateLengthSides());