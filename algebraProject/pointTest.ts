import { Point } from "./point";

let myPoint : Point = new Point(4, 8);

console.log("----Prbando metodos de Point------")
myPoint.toString();

myPoint.setX(10);
console.log(myPoint.getX());

myPoint.setY(25);
console.log(myPoint.getY());


console.log("----Probando metodos de Distancias------")
console.log('Distancia al punto de origen: ' + myPoint.distanceToOrigin())

let myPoint2 : Point = new Point(11, 5);
console.log('Distancia de otro punto: ' + myPoint.calculateDistance(myPoint2))

console.log("----Probando metodos de calcular cuadrante------")
console.log("Está en el cuadrante número: " + myPoint.calculateQuadrant())