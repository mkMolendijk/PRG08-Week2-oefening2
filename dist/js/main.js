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
    function Rock(parent) {
        var _this = _super.call(this, "rock", parent, 490, 210, 62, 62) || this;
        _this.speed = 0;
        _this.move();
        return _this;
    }
    Rock.prototype.move = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
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
    return Utils;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.container = document.getElementById("container");
        this.car = new Car(this.container);
        this.rock = new Rock(this.container);
        this.score = 0;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.move();
        this.rock.move();
        if (Utils.checkCollision(this.car, this.rock)) {
            console.log("Bieoooom");
            this.rock.setSpeed(5);
            this.car.setSpeed(0);
            this.score = 0;
            this.endGame();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.setScore = function (s) {
        this.score = Math.round(s);
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : " + this.score;
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
    function Car(parent) {
        var _this = _super.call(this, "car", parent, 0, 220, 145, 45) || this;
        _this.speed = 4;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
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
//# sourceMappingURL=main.js.map