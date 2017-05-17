/// <reference path="wheel.ts"/>
/// <reference path="gameObject.ts"/>
/// <reference path="main.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(parent) {
        var _this = _super.call(this, "car", parent, 0, 220, 145, 45) || this;
        // het DOM element waar de div in geplaatst wordt:
        // let container:HTMLElement = document.getElementById("container");
        // this.div = document.createElement("car");
        // container.appendChild(this.div);
        _this.speed = 4;
        // hier een keypress event listener toevoegen. een keypress zorgt dat braking true wordt
        //
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        _this.wheel1 = new Wheel(_this.div, 15, 30, 22, 22);
        _this.wheel2 = new Wheel(_this.div, 105, 30, 22, 22);
        _this.move();
        return _this;
    }
    Car.prototype.move = function () {
        // hier de snelheid verlagen als we aan het afremmen zijn
        //
        if (this.braking) {
            this.speed *= 0.9;
            var g = Game.getInstance();
            g.setScore(this.x);
            g.endGame();
        }
        // hier kijken of de x waarde hoger is dan de x van de rots (335)
        //        
        // de snelheid bij de x waarde optellen
        this.x += this.speed;
        // tekenen
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.setSpeed = function (s) {
        this.speed = s;
    };
    //
    // hier een method maken voor on key press
    //
    Car.prototype.onKeyDown = function (event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 40:
                this.braking = true;
                break;
        }
    };
    return Car;
}(GameObject));
