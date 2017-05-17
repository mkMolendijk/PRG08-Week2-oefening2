/// <reference path="wheel.ts"/>
/// <reference path="gameObject.ts"/>
/// <reference path="main.ts"/>


class Car extends GameObject {

    public speed:number;
    private braking:boolean = false;

    private wheel1:Wheel;
    private wheel2:Wheel;

    constructor(parent: HTMLElement, yPos: number, xPos: number) {
        super("car", parent, xPos, yPos, 145, 45);

        this.speed = Utils.getRandomInt(1, 5);

        this.wheel1 = new Wheel(this.div, 15, 30, 22, 22);
        this.wheel2 = new Wheel(this.div, 105, 30, 22, 22);

        this.move();
    }

    public move():void {

        if(this.braking) {
            this.speed *= 0.9;

            let g: Game = Game.getInstance();

            g.setScore(this.x);
            g.endGame();
        }

        this.x += this.speed;

        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    } 

    public setSpeed(s: number):void {
        this.speed = s;
    }

    public clickCar():void {
        this.braking = true;
        console.log("Clicked");
    } 
}