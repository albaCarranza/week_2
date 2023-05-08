
// Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:

export class Mobile{

private name: string;
private trademark: string;
private model: string;
private color: string;
private price: number;

constructor(name: string, trademark: string, model: string, color: string, price: number){
    this.name = name;
    this.trademark = trademark;
    this.model = model;
    this.color = color;
    this.price = price;
}
public getName(): String {
    return this.name
}
public getTrademark(): String {
    return this.trademark
}
public getmodel(): String {
    return this.model
}
public getcolor(): String {
    return this.color
}
public getprice(): Number {
    return this.price
}
public setName(name: string): void {
    this.name = name;
}
public setTrademark(trademark: string): void {
    this.trademark = trademark;
}
public setmodel(model: string): void {
    this.model = model;
}
public setcolor(color: string): void {
    this.color = color;
}
public setprice(price: number): void {
    this.price = price;
}
public toString(){
    console.log("\n\n“The characteristics of the mobile name are:”\n");
    console.log("Name: " + this.name);
    console.log("Trademark: " + this.trademark);
    console.log("Model: " + this.model);
    console.log("Color: " + this.color);
    console.log("Price: " + this.price);
}


}
