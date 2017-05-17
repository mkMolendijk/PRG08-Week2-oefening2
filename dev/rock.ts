/// <reference path="gameObject.ts"/>

class Rock extends GameObject{

    private speed:number;

    constructor(parent:HTMLElement, yPos: number, xPos: number) {
        super("rock", parent, xPos, yPos, 62, 62);
    }

    // public move():void {
    //
    //     // speed optellen zo lang we niet de bodem raken
    //     // speed wordt hoger dan 0 zodra de auto de rots raakt
    //
    //     //teken de div op de juiste positie
    //     // this.div.style.transform ="translate(490px,210px)";
    //
    //     // de snelheid bij de x waarde optellen
    //     this.x += this.speed;
    //
    //     // tekenen
    //     this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    //
    // }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

}