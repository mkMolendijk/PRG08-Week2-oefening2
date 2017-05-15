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
    function GameObject(str, parent, x, y) {
        this.div = document.createElement(str);
        parent.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.draw();
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var Wheel = (function (_super) {
    __extends(Wheel, _super);
    function Wheel(parent, x, y) {
        return _super.call(this, "wheel", parent, x, y) || this;
    }
    return Wheel;
}(GameObject));
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(parent) {
        var _this = _super.call(this, "car", parent, 0, 220) || this;
        _this.speed = 4;
        _this.width = 145;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        _this.wheel1 = new Wheel(_this.div, 15, 30);
        _this.wheel2 = new Wheel(_this.div, 105, 30);
        _this.move();
        return _this;
    }
    Car.prototype.move = function () {
        if (this.braking) {
            this.speed *= 0.9;
        }
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
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
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock(parent) {
        var _this = _super.call(this, "rock", parent, 490, 210) || this;
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
    Rock.prototype.rockMove = function () {
        this.hasBeenHit = true;
    };
    return Rock;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.container = document.getElementById("container");
        this.car = new Car(this.container);
        this.rock = new Rock(this.container);
        this.scoreCalculated = false;
        this.score = 0;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.move();
        this.rock.move();
        if (this.car.x + this.car.width >= this.rock.x) {
            console.log("Biem");
            this.rock.setSpeed(5);
        }
        if (this.car.speed <= 0 && !this.scoreCalculated) {
            if (this.rock.hasBeenHit) {
                console.log("Score: 0");
                this.scoreCalculated = true;
                this.container.innerHTML = "Score:" + String(this.score);
            }
            else {
                this.score = Math.round((61250 / 43) - ((125 * (this.rock.x - this.car.x)) / 43));
                console.log("Score: " + this.score);
                this.scoreCalculated = true;
                this.container.innerHTML = "Score:" + String(this.score);
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : 0";
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
    var g = Game.getInstance();
});
var Utils = (function () {
    function Utils() {
    }
    Utils.checkCollision = function (go1, go2) {
        return;
    };
    return Utils;
}());
//# sourceMappingURL=main.js.map