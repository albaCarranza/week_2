export class Vector {
    private elements: Array<number>
    public n: number
    public k: number

    constructor(n: number, k: number) {
        this.n = n
        this.k = k
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.round(Math.random() * k))
        }
    }

    // Pongo esto porque necesito acceder al elemento privado del vector secundario para operaciones
    public getElements(): Array<number> {
        return this.elements;
    }

    public setElements(elements: Array<number>): void {
        this.elements = elements;
    }

    public print(): void {
        console.log(this.elements)
    }

    public add(v1: Array<number>): Array<number> {
        let i: number = 0
        let v: Array<number> = []
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] + v1[i])
        }
        return v
    }

    public subs(v1: Array<number>): Array<number> {
        let i: number = 0
        let v: Array<number> = [];
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] - v1[i])
        }
        return v;
    }

    public mult(v1: Array<number>): Array<number> {
        let i: number = 0
        let v: Array<number> = [];
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] * v1[i])
        }
        return v;
    }

    public multNumb(n: number): Array<number> {
        let i: number = 0
        let v: Array<number> = [];
        for (i = 0; i < this.elements.length; i++) {
            v.push(this.elements[i] * n)
        }
        return v;
    }
}
