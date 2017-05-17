/// <reference path="car.ts"/>
/// <reference path="rock.ts"/>
/// <reference path="utils.ts"/>


class Game {

    private static GameInstance: Game;
    private container : HTMLElement;
    private score: number;
    private totalScore: number = 0;

    private cars: Array<Car>;
    private yPosCar: number = 100;
    private xPosCar: number;

    private rocks: Array<Rock>;
    private yPosRock: number;
    private xPosRock: number;

    constructor() {
        this.container = document.getElementById("container");

        this.score = 0;

        this.cars = new Array<Car>();

        for (let i = 0; i < 6; i++) {
            this.xPosCar = Utils.getRandomInt(-145, -200);
            this.cars.push(new Car(this.container, this.yPosCar, this.xPosCar));
            this.yPosCar = this.yPosCar + 55;
        }

        for (let c of this.cars) {
            c.div.addEventListener("click", c.clickCar.bind(c));
        }

        this.rocks = new Array<Rock>();

        for (let i = 0; i < 12; i++) {
            this.xPosRock = Utils.getRandomInt(500, 600);
            this.yPosRock = Utils.getRandomInt(0, 600);

            this.rocks.push(new Rock(this.container, this.yPosRock, this.xPosRock))
        }
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        // if (Utils.checkCollision(this.car, this.rock)) {
        //
        //        console.log("Bieoooom");
        //        this.rock.setSpeed(5);
        //        this.car.setSpeed(0);
        //
        //        this.score = 0;
        //
        //        this.endGame();
        // }

        for (let c of this.cars) {
            c.move();

            for (let r of this.rocks) {
                if (Utils.checkCollision(c, r)) {
                    this.totalScore = 0;
                    this.endGame();
                    return
                }
            }
        }
        requestAnimationFrame(() => this.gameLoop());
    }

    public setScore(s: number){
        this.score = Math.round(s);
        this.totalScore += this.score;
    }

    public endGame(){
        document.getElementById("score").innerHTML = "Score : " + this.totalScore;
    }
    
    public static getInstance() {
        if (! Game.GameInstance) {
            Game.GameInstance = new Game();
        }
        return Game.GameInstance;
    }
} 
// load
window.addEventListener("load", function() {
    Game.getInstance();
});