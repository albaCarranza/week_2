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

let myPoint2 : Point = new Point(9, 15);
console.log('Distancia de otro punto: ' + myPoint.calculateDistance(myPoint2))

console.log("----Probando metodos de calcular cuadrante------")
console.log("Está en el cuadrante número: " + myPoint.calculateQuadrant())


console.log("----Probando calcular punto mas cercano------")
let point1 : Point = new Point(30, 50);
let point2 : Point = new Point(11, 26);
let point3 : Point = new Point(1, 1);

let arrPoints = [point1, point2, point3];

console.log('El punto mas cercano se encuentra en la posición: ' + myPoint.calculateNearest(arrPoints));