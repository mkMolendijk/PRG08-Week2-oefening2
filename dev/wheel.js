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
var Wheel = (function (_super) {
    __extends(Wheel, _super);
    // private x:number;
    // private y:number;
    // private div:HTMLElement;
    function Wheel(parent, x, y, width, height) {
        return _super.call(this, "wheel", parent, x, y, width, height) || this;
    }
    return Wheel;
}(GameObject));
