/// <reference path="gameObject.ts"/>

class Wheel extends GameObject {

    private car:Car;
    // private x:number;
    // private y:number;
    // private div:HTMLElement;

    constructor(parent: HTMLElement, x: number, y: number, width: number, height: number) {
        super("wheel", parent, x, y, width, height);
    }
}