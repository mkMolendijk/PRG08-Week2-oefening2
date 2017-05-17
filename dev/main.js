/// <reference path="car.ts"/>
/// <reference path="rock.ts"/>
/// <reference path="utils.ts"/>
var Game = (function () {
    function Game() {
        var _this = this;
        // let container: HTMLElement = document.getElementById("container");
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
            console.log("Biem");
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
// load
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
