/// <reference path="gameObject.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock(parent) {
        var _this = _super.call(this, "rock", parent, 490, 210, 62, 62) || this;
        _this.speed = 0;
        _this.move();
        return _this;
    }
    Rock.prototype.move = function () {
        // speed optellen zo lang we niet de bodem raken
        // speed wordt hoger dan 0 zodra de auto de rots raakt
        //teken de div op de juiste positie
        // this.div.style.transform ="translate(490px,210px)";  
        // de snelheid bij de x waarde optellen
        this.x += this.speed;
        // tekenen
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Rock.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Rock;
}(GameObject));
