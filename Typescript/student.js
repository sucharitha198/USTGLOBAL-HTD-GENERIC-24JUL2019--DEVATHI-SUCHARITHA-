"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student() {
        this.name = 'suchi';
        this.age = 20;
    }
    Student.prototype.printDetails = function () {
        console.log(this.name);
    };
    return Student;
}());
exports.Student = Student;
