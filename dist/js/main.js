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
var GameObject = (function () {
    function GameObject(str, parent, x, y, width, height) {
        this.div = document.createElement(str);
        parent.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.draw();
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var Wheel = (function (_super) {
    __extends(Wheel, _super);
    function Wheel(parent, x, y, width, height) {
        return _super.call(this, "wheel", parent, x, y, width, height) || this;
    }
    return Wheel;
}(GameObject));
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock(parent, yPos, xPos) {
        return _super.call(this, "rock", parent, xPos, yPos, 62, 62) || this;
    }
    Rock.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Rock;
}(GameObject));
var Utils = (function () {
    function Utils() {
    }
    Utils.checkCollision = function (instance1, instance2) {
        return (instance1.x < instance2.x + instance2.width &&
            instance1.x + instance1.width > instance2.x &&
            instance1.y < instance2.y + instance2.height &&
            instance1.height + instance1.y > instance2.y);
    };
    Utils.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Utils;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.totalScore = 0;
        this.yPosCar = 100;
        this.container = document.getElementById("container");
        this.score = 0;
        this.cars = new Array();
        for (var i = 0; i < 6; i++) {
            this.xPosCar = Utils.getRandomInt(-145, -200);
            this.cars.push(new Car(this.container, this.yPosCar, this.xPosCar));
            this.yPosCar = this.yPosCar + 55;
        }
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.div.addEventListener("click", c.clickCar.bind(c));
        }
        this.rocks = new Array();
        for (var i = 0; i < 12; i++) {
            this.xPosRock = Utils.getRandomInt(500, 600);
            this.yPosRock = Utils.getRandomInt(0, 600);
            this.rocks.push(new Rock(this.container, this.yPosRock, this.xPosRock));
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.move();
            for (var _b = 0, _c = this.rocks; _b < _c.length; _b++) {
                var r = _c[_b];
                if (Utils.checkCollision(c, r)) {
                    this.totalScore = 0;
                    this.endGame();
                    return;
                }
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.setScore = function (s) {
        this.score = Math.round(s);
        this.totalScore += this.score;
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : " + this.totalScore;
    };
    Game.getInstance = function () {
        if (!Game.GameInstance) {
            Game.GameInstance = new Game();
        }
        return Game.GameInstance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(parent, yPos, xPos) {
        var _this = _super.call(this, "car", parent, xPos, yPos, 145, 45) || this;
        _this.braking = false;
        _this.speed = Utils.getRandomInt(1, 5);
        _this.wheel1 = new Wheel(_this.div, 15, 30, 22, 22);
        _this.wheel2 = new Wheel(_this.div, 105, 30, 22, 22);
        _this.move();
        return _this;
    }
    Car.prototype.move = function () {
        if (this.braking) {
            this.speed *= 0.9;
            var g = Game.getInstance();
            g.setScore(this.x);
            g.endGame();
        }
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.setSpeed = function (s) {
        this.speed = s;
    };
    Car.prototype.clickCar = function () {
        this.braking = true;
        console.log("Clicked");
    };
    return Car;
}(GameObject));
//# sourceMappingURL=main.js.map