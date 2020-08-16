"use strict";
{
    console.info("---- 関数----");
    var もっともシンプルな関数 = function () {
    };
    console.info(typeof もっともシンプルな関数);
    console.info("---- 引数つき関数----");
    var 引数つき関数 = function (引数) {
    };
    console.info(typeof 引数つき関数);
    console.info("---- 値を持つ関数----");
    var 値を持つ関数 = function (引数) {
        return 引数;
    };
    console.info(typeof 値を持つ関数);
}
{
    console.info("----- 関数は値 -----");
    var おりじなる関数名 = function (引数１, 引数２) {
        console.info(引数１ * 引数２);
    };
    // 実行
    var 別の関数名 = おりじなる関数名;
    別の関数名(1, 2);
}
{
    console.info("----- 関数は'実行'することができる'値'　-----");
    var 数 = 1;
    数;
    var 関数 = function () {
        console.info("こんにちは世界！");
    };
    // 実行
    関数;
    関数();
}
{
    console.info("----- 変数のタイプ　-----");
    var 広域変数 = "広域変数1";
    広域変数 = "広域変数2";
    console.info(広域変数);
    var ローカル変数 = "ローカル変数1";
    ローカル変数 = "ローカル変数2";
    console.info(ローカル変数);
    var 定数 = 1;
    //	定数 = 2;
    //	console.info(定数);
}
{
    console.info("----- 関数は'スコープ'を持つ　-----");
    var 変数 = "関数の物じゃない変数";
    var 定数 = "関数の物じゃない定数";
    var 関数 = function () {
        var 変数 = "関数の変数";
        var 定数 = "関数の定数";
        console.info("関数内から見た変数 = " + 変数);
        console.info("関数内から見た定数 = " + 定数);
    };
    // 実行
    関数();
    console.info("変数 = " + 変数);
    console.info("定数 = " + 定数);
    console.info("広域変数 = " + 広域変数);
}
{
    console.info("----- 演算 -----");
    var 加算 = 1 + 1;
    console.info(加算);
    var 減算 = 1 - 1;
    console.info(減算);
    var 乗算 = 2 * 2;
    console.info(乗算);
    var 除算 = 1 / 2;
    console.info(除算);
    var 剰余 = 5 % 2;
    console.info(剰余);
    var 追加 = 1;
    追加 += 1;
    console.info(追加);
    var インクリメント = 1;
    console.info(++インクリメント);
    console.info(インクリメント++);
}
{
    var 値１ = null;
    var 値１大丈夫 = 値１ || "値１はfalsy";
    console.info(値１大丈夫);
    var 値２ = 10;
    var 値２大丈夫 = 値２ || "値２はfalsy";
    console.info(値２大丈夫);
    // よく見るパターン
    var f = function () {
        return "OK";
    };
    {
        var error = "";
        var 関数の値 = error;
        if (!error) {
            関数の値 = f();
        }
        console.info(関数の値);
    }
    {
        var error = null;
        var 関数の値 = error || f();
        console.info(関数の値);
    }
}
{
    var 値１ = "1";
    var 値２ = !値１;
    console.info(値２);
}
{
    var 値１ = 95;
    var 値２ = 250;
    var アンド = 値１ & 値２;
    console.info(アンド.toString(2));
    var オア = 値１ | 値２;
    console.info(オア.toString(2));
    var Xオア = 値１ ^ 値２;
    console.info(Xオア.toString(2));
}
/*
{
    console.info("----- 制御構造(条件)　-----")

        if (true) {
            console.info(true);
        } else {
            console.info(false);
        }

    // 実行

    関数();
}
*/
{
    console.info("----- 制御構造(繰り返し)　-----");
    var 関数 = function () {
        for (var カウンター = 0; カウンター < 10; カウンター++) {
            console.info(カウンター);
        }
    };
    // 実行
    関数();
}
{
    console.info("----- 制御構造(繰り返しcontinue)　-----");
    loop1: for (var カウンター = 0; カウンター < 4; カウンター++) {
        if (カウンター === 2) {
            continue loop1;
        }
        console.log(カウンター);
    }
    console.info("----- 制御構造(繰り返しbreak)　-----");
    loop1: for (var カウンター = 0; カウンター < 4; カウンター++) {
        if (カウンター === 2) {
            break loop1;
        }
        console.log(カウンター);
    }
}
{
    console.info("----- 繰り返しのモダン　-----");
    var 関数 = function (値) {
        console.info(値);
    };
    // 実行
    var 配列 = [1, 2, 3];
    配列.forEach(関数);
}
{
    console.info("----- コールバックパターン -----");
    var 関数名 = function (コールバック関数) {
        コールバック関数("AAA");
    };
    var コールバック関数名 = function (引数) {
        console.info(引数);
    };
    // 実行
    関数名(コールバック関数名);
}
{
    console.info("----- コールバックの書き方違い。(無名関数)  -----");
    var 関数名 = function (関数) {
        関数(1);
    };
    // 実行
    関数名(function (引数) {
        console.info(引数);
    });
}
{
    console.info("----- コールバック前後。  -----");
    var 関数名 = function (コールバック関数) {
        console.info("コールバック前");
        コールバック関数(1);
        console.info("コールバック後");
    };
    // 実行
    関数名(function (引数) {
        console.info(引数);
    });
}
/*
{
    console.info("----- 終端コールバック。  -----")

    const 関数名 = (引数, 完了コールバック関数) => {
        let 処理結果 = false;

        //　処理...
        処理結果 = true;

        完了コールバック関数(処理結果);
    };

    // 実行

    関数名(1, (完了) => {
        console.info(完了);
    });

}
*/
/*
{
    console.info("----- コールバックループ。  -----")

    const loop = (n, コールバック関数) => {
        for (let index = 0; index < n; index++) {
            コールバック関数(index);
        }
    };

    // 実行

    loop(10,(引数) => {
        console.info(引数);
    });

}
*/ 
//# sourceMappingURL=function.js.map