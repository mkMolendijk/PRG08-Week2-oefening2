/// <reference path="wheel.ts"/>
/// <reference path="gameObject.ts"/>

class Car extends GameObject {

    public speed:number;
    private braking:boolean;
    public width:number;

    private wheel1:Wheel;
    private wheel2:Wheel;
            
    constructor(parent: HTMLElement) {
        super("car", parent, 0, 220);

        // het DOM element waar de div in geplaatst wordt:
        // let container:HTMLElement = document.getElementById("container");

        // this.div = document.createElement("car");
        // container.appendChild(this.div);

        this.speed = 4;
        this.width = 145;

        // hier een keypress event listener toevoegen. een keypress zorgt dat braking true wordt
        //
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));

        this.wheel1 = new Wheel(this.div, 15, 30);
        this.wheel2 = new Wheel(this.div, 105, 30);

        this.move();
    }

    public move():void {
        // hier de snelheid verlagen als we aan het afremmen zijn
        //

        if(this.braking) {
            this.speed *= 0.9;
        }

        // hier kijken of de x waarde hoger is dan de x van de rots (335)
        //        

        // de snelheid bij de x waarde optellen
        this.x += this.speed;

        // tekenen
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    } 

    //
    // hier een method maken voor on key press
    //
    private onKeyDown(event:KeyboardEvent):void {
        console.log(event.keyCode);
        switch(event.keyCode){
            case 40: 
                this.braking = true;
                break;
        }
    } 
}