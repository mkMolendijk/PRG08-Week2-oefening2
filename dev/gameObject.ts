class GameObject {

    protected div: HTMLElement;
    public x: number;
    public y: number;

    constructor(str: string, parent: HTMLElement, x: number, y: number) {
        // let container:HTMLElement = document.getElementById(parent);
        
        this.div = document.createElement(str);
        parent.appendChild(this.div);

        this.x = x;
        this.y = y;

        this.draw();

    }

    public draw():void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}