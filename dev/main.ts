/// <reference path="car.ts"/>
/// <reference path="rock.ts"/>

class Game {

    private static GameInstance: Game;
    private container : HTMLElement;
    private car : Car;
    private rock: Rock;
    private score: Number;
    private scoreCalculated: boolean;
    
    constructor() {
        // let container: HTMLElement = document.getElementById("container");
        this.container = document.getElementById("container");


        // this.car = new Car(this.container);
        let cars : Array<Car> = new Array<Car>();
        cars.push(new Car(this.container));
        
        for (let c of cars) {
           console.log("car position is " + c.x);
        }

        // this.rock = new Rock(this.container);
        let rocks : Array<Rock> = new Array<Rock>();
        rocks.push(new Rock(this.container));

        for (let r of rocks) {
            console.log("rock position is " + r.x);
        }

        this.scoreCalculated = false;
        this.score = 0;

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.move();
        this.rock.move();

        if(this.car.x + this.car.width >= this.rock.x){
           console.log("Biem");
           this.rock.setSpeed(5);
        }

        if (this.car.speed <= 0 && !this.scoreCalculated){
            if (this.rock.hasBeenHit) {
                console.log(`Score: 0`);
                this.scoreCalculated = true;
                this.container.innerHTML = "Score:"+String(this.score);
            } else {
                this.score = Math.round((61250 / 43) - ((125 * (this.rock.x - this.car.x)) / 43));
                console.log(`Score: ${this.score}`);
                this.scoreCalculated = true;
                this.container.innerHTML = "Score:"+String(this.score);
            }
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    public endGame(){
        document.getElementById("score").innerHTML = "Score : 0";
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