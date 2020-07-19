"use strict";
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = "";
    }
    Animal.prototype.bark = function () {
        console.log(this.voice);
    };
    Animal.prototype.fight = function (target) {
        console.log(target.voice);
        console.log(this.voice);
    };
    return Animal;
}());
var pochi = new Animal();
var tama = new Animal();
pochi.voice = "Bow";
tama.voice = "Maow";
tama.fight(pochi);
//# sourceMappingURL=study.js.map