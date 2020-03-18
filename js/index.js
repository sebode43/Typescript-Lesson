"use strict";
var a = 0;
var b = 1;
function X() {
    return 1;
}
var y = function () {
    return 0;
};
var z = function () {
    return -1;
};
var a1 = 5;
function add1(n) {
    return n + 4;
}
function x1(t) {
    return;
}
var Customer = /** @class */ (function () {
    function Customer(name, sales) {
        if (name === void 0) { name = 'NEW Customer'; }
        this.id = 0; //0 = default value
        this.active = true;
        this.name = name;
        this.sales = 0;
    }
    Customer.prototype.print = function () {
        console.log("" + this.name);
    };
    return Customer;
}());
function i() {
    var ctrl = document.getElementById("out");
    ctrl.innerText = "500";
}
