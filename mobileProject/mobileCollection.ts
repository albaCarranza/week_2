import { Mobile } from "./mobile"

export class MobileCollection {
    mobiles: Mobile[];
    totalPrice: Number;

    constructor(mobiles){
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    setMobiles(mobiles: Mobile[]){
        this.mobiles = mobiles;
    }

    setTotalPrice(totalPrice: Number){
        this.totalPrice = totalPrice;
    }

    getMobiles(){
        return this.mobiles;
    }

    getTotalPrice(){
        return this.totalPrice;
    }

    private totalPriceCalculation(): Number {
        let total: Number = 0
        for(let mobile of this.mobiles){
            total = Number(total) + Number(mobile.getprice());
        }
        return total;
    }


    printCollection(){
        for(let mobile of this.mobiles){
            console.log("\n\n“The characteristics of the mobile "+ mobile.getName() +" are:”\n");
            console.log("Name: " + mobile.getName());
            console.log("Trademark: " + mobile.getTrademark());
            console.log("Model: " + mobile.getmodel());
            console.log("Color: " + mobile.getcolor());
            console.log("Price: " + mobile.getprice());
        }
    }
}