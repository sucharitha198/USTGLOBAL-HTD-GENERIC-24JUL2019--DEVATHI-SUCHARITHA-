"use strict";
var MathOperations;
(function (MathOperations) {
    var PI = 3.14;
    function cir(r) {
        console.log(2 * PI * r);
    }
    MathOperations.cir = cir;
    function area(r) {
        console.log(PI * r * r);
    }
    MathOperations.area = area;
})(MathOperations || (MathOperations = {}));
MathOperations.cir(5);
