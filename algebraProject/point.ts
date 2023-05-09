
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
       return Math.sqrt(((this.x-0)^2) + ((this.y-0)^2));
    }

    calculateDistance(anotherPoint:Point):number {
        return Math.sqrt(((this.x-anotherPoint.getX())^2) + ((this.y-anotherPoint.getY())^2));
    }
}


