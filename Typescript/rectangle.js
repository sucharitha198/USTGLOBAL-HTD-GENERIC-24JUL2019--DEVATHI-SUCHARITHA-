"use strict";
var MathOperations;
(function (MathOperations) {
    var rectangle;
    (function (rectangle) {
        function area(length, breadth) {
            console.log('Area of the rectangle ' + length * breadth);
        }
        rectangle.area = area;
    })(rectangle = MathOperations.rectangle || (MathOperations.rectangle = {}));
    var rect;
    (function (rect) {
        function perimeter(length, breadth) {
            console.log('perimeter of the rectangle ' + 2 * (length + breadth));
        }
        rect.perimeter = perimeter;
    })(rect = MathOperations.rect || (MathOperations.rect = {}));
})(MathOperations || (MathOperations = {}));
MathOperations.rect.perimeter(2, 3);
