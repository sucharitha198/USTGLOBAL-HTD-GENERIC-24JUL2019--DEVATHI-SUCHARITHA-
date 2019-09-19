// console.log('----unions----');
// let unions:number|string;
// unions = 20;
// console.log(unions);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log('tuple');
// let myTuple=['suchi',20,true];
// console.log(myTuple);
// enum clr{
//     ash,
//     milky,
//     cyan,
// } 
// console.log(clr.cyan);
var Building = /** @class */ (function () {
    function Building(Bname) {
        this.Bname = Bname;
    }
    return Building;
}());
var Apartment = /** @class */ (function (_super) {
    __extends(Apartment, _super);
    function Apartment(Bname, street) {
        return _super.call(this, Bname) || this;
    }
    return Apartment;
}(Building));
var build = new Apartment('laksh', 'bkm');
console.log(build.Bname);
