"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hoge1 = /** @class */ (function () {
    function Hoge1() {
        this.piyo = 1;
    }
    Hoge1.prototype.Geho = function () {
        this.piyo = this.piyo + 9;
    };
    return Hoge1;
}());
var Hoge2 = /** @class */ (function (_super) {
    __extends(Hoge2, _super);
    function Hoge2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piyopiyo = 1;
        return _this;
    }
    return Hoge2;
}(Hoge1));
var i = new Hoge2();
var j = new Hoge1();
//# sourceMappingURL=interface.js.map