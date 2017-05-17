/// <reference path="car.ts"/>
/// <reference path="rock.ts"/>
/// <reference path="utils.ts"/>


class Game {

    private static GameInstance: Game;
    private container : HTMLElement;
    private car : Car;
    private rock: Rock;
    private score: Number;
    
    constructor() {
        // let container: HTMLElement = document.getElementById("container");
        this.container = document.getElementById("container");


        this.car = new Car(this.container);
        this.rock = new Rock(this.container);
        this.score = 0;

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.move();
        this.rock.move();

        if (Utils.checkCollision(this.car, this.rock)) {

               console.log("Biem");
               this.rock.setSpeed(5);
               this.car.setSpeed(0);

               this.score = 0;

               this.endGame();
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    public setScore(s: number){
        this.score = Math.round(s);
    }

    public endGame(){
        document.getElementById("score").innerHTML = "Score : " + this.score;
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
    let g = Game.getInstance();
});