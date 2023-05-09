
// Dicho fichero debe contener la clase Point con los siguientes atributos privados:

export class Point{
    x: number;
    y: number;

    constructor(x: number,y: number){
        this.x = x;
        this.y = y;
    } 

    setX(x: number){
        this.x =x;
    }

    setY(y: number){
        this.y =y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    toString(){
        console.log("("+this.x+","+this.y+")")
    }

    distanceToOrigin():number{
        const x = this.x - 0;
        const y = this.y - 0;

        return Math.sqrt(x * x + y * y);
    }

    calculateDistance(anotherPoint:Point):number {

        const x = this.x - anotherPoint.x;
        const y = this.y - anotherPoint.y;

        return Math.sqrt(x * x + y * y);
    }

    calculateQuadrant(): number{

        let resultado = -1;

        if(this.x == 0 || this.y == 0){
            resultado = 0;
        }

        if(this.x > 0 && this.y > 0){
            resultado = 1;
        }

        if(this.x < 0 && this.y > 0){
            resultado = 2;
        }

        if(this.x < 0 && this.y < 0){
            resultado = 3;
        }

        if(this.x > 0 && this.y < 0){
            resultado = 4;
        }

        return resultado; 
    }

    calculateNearest(points : Point[]): number {
        let min = 9999999999999999999;
        let posicion = -1;
        for (let i = 0; i < points.length; i++) {
            let distancia = this.calculateDistance(points[i]);

            if(distancia < min){
                min = distancia;
                posicion = i;
            }   
        }

        return posicion;
    }
}


