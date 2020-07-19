"use strict";
/*
{
    const はてな = true;

    console.info("----- == " + はてな + " -----");

    if (はてな == false) {
        console.info("\u001b[34m" + "false" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "falseではない." + "\u001b[0m");
    }

    if (はてな == "") {
        console.info("\u001b[34m" + "''" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "''ではない" + "\u001b[0m");
    }

    if (はてな == 0) {
        console.info("\u001b[34m" + "0" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "0ではない" + "\u001b[0m");
    }

    if (はてな == null) {
        console.info("\u001b[34m" + "null" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "nullではない" + "\u001b[0m");
    }

    if (はてな == undefined) {
        console.info("\u001b[34m" + "undefined" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "undefinedではない" + "\u001b[0m");
    }
}
*/
/*
{
    const はてな = true;

    console.info("----- === " + はてな + " -----");

    if (はてな === false) {
        console.info("\u001b[34m" + "false" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "falseではない" + "\u001b[0m");
    }

    if (はてな === "") {
        console.info("\u001b[34m" + "''" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "''ではない" + "\u001b[0m");
    }

    if (はてな === 0) {
        console.info("\u001b[34m" + "0" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "0ではない" + "\u001b[0m");
    }

    if (はてな === null) {
        console.info("\u001b[34m" + "null" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "nullではない" + "\u001b[0m");
    }

    if (はてな === undefined) {
        console.info("\u001b[34m" + "undefined" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "undefinedではない" + "\u001b[0m");
    }
}
*/
/*
{
    console.info("----- 特殊な値 -----");

    const はてな = -Infinity;

    if (はてな == +Infinity) {
        console.info("\u001b[34m" + "+Infinity" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "+Infinityではない" + "\u001b[0m");
    }

    if (はてな == -Infinity) {
        console.info("\u001b[34m" + "-Infinity" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "-Infinityではない" + "\u001b[0m");
    }

    if (はてな === +Infinity) {
        console.info("\u001b[34m" + "+Infinity" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "+Infinityではない" + "\u001b[0m");
    }

    if (はてな === -Infinity) {
        console.info("\u001b[34m" + "-Infinity" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "-Infinityではない" + "\u001b[0m");
    }

    console.info("----- " + NaN + " -----");

    if (NaN == NaN) {
        console.info("\u001b[34m" + "NaN" + "\u001b[0m");
    } else {
        console.info("\u001b[35m" + "NaNではない" + "\u001b[0m");
    }

}
*/
/*
{
    console.info("-------- Switch --------");

    const はてな = false;

    switch (はてな) {
        case false:
            console.info("false");
            break;
        case "":
            console.info('""');
            break;
        case 0:
            console.info("0");
            break;
        case +0:
            console.info("+0");
            break;
        case -0:
            console.info("-0");
            break;
        case null:
            console.info("null");
            break;
        case undefined:
            console.info("undefined");
            break;
        case +Infinity:
            console.info("+Infinity");
            break;
        case -Infinity:
            console.info("-Infinity");
            break;
        case NaN:
            console.info("NaN");
            break;
        default:
            console.info("other");
    }

}
*/
/*
{
    console.info("-------- 参照 --------");

    console.info("-------- そもそも別 --------");

    const あれ = [1,2,3];
    let これ = [1,2,3];

    if (あれ == これ) {
        console.info("あれはこれ");
    } else {
        console.info("これじゃない");　// こっち
    }

    if (あれ <= これ) {
        console.info("あれはこれ");
    } else {
        console.info("これじゃない");　// こっち
    }

    if (あれ > これ) {
        console.info("あれはこれ");
    } else {
        console.info("これじゃない");　// こっち
    }

    console.info("-------- 参照なら --------");

    これ = あれ;

    if (あれ == これ) {
        console.info("あれはこれ");
    } else {
        console.info("これじゃない");　// こっち
    }

    if (あれ <= これ) {
        console.info("あれはこれ");
    } else {
        console.info("これじゃない");　// こっち
    }

    if (あれ > これ) {
        console.info("あれはこれ");
    } else {
        console.info("これじゃない");　// こっち
    }

}
*/
//# sourceMappingURL=comparison.js.map