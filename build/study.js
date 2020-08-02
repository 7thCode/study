"use strict";
var isPrime = function (x) {
    var max = Math.floor(Math.sqrt(x));
    var result = true;
    for (var y = 2; y <= max; y++) {
        if ((x % y) === 0) {
            result = false;
            break;
        }
    }
    return result;
};
for (var X = 3; X < 1000; X += 2) {
    if (isPrime(X)) {
        console.info(X);
    }
}
//# sourceMappingURL=study.js.map