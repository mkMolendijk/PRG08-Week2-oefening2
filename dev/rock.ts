/// <reference path="gameObject.ts"/>

class Rock extends GameObject{

    private speed:number;
    public hasBeenHit: Boolean;
                        
    constructor(parent:HTMLElement) {
        super("rock", parent, 490, 210, 62, 62);

        this.speed = 0;
        this.move();
    }

    public move():void {

        // speed optellen zo lang we niet de bodem raken
        // speed wordt hoger dan 0 zodra de auto de rots raakt
        
        //teken de div op de juiste positie
        // this.div.style.transform ="translate(490px,210px)";  

        // de snelheid bij de x waarde optellen
        this.x += this.speed;

        // tekenen
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)"; 
          
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

}