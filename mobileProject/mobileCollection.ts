import { Mobile } from "./mobile"

export class MobileCollection {
    mobiles: Mobile[];
    totalPrice: number;

    constructor(mobiles){
        this.mobiles = mobiles;
    }

    setMobiles(mobiles: Mobile[]){
        this.mobiles = mobiles;
    }

    setTotalPrice(totalPrice: number){
        this.totalPrice = totalPrice;
    }

    getMobiles(){
        return this.mobiles;
    }

    getTotalPrice(){
        return this.totalPrice;
    }
}