"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            total = Number(total) + Number(mobile.getprice());
        }
        return total;
    };
    MobileCollection.prototype.printCollection = function () {
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            console.log("\n\n“The characteristics of the mobile " + mobile.getName() + " are:”\n");
            console.log("Name: " + mobile.getName());
            console.log("Trademark: " + mobile.getTrademark());
            console.log("Model: " + mobile.getmodel());
            console.log("Color: " + mobile.getcolor());
            console.log("Price: " + mobile.getprice());
        }
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
