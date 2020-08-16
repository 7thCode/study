
{
	console.info("---- 関数----");

	const もっともシンプルな関数 = () => {
	};

	console.info(typeof もっともシンプルな関数);

	console.info("---- 引数つき関数----");

	const 引数つき関数 = (引数: any) => {
	};

	console.info(typeof 引数つき関数);

	console.info("---- 値を持つ関数----");

	const 値を持つ関数 = (引数: any) => {
		return 引数;
	};

	console.info(typeof 値を持つ関数);
}

{
	console.info("----- 関数は値 -----")

	const おりじなる関数名 = (引数１: any, 引数２: any) => {
		console.info(引数１ * 引数２);
	};

	// 実行

	const 別の関数名 = おりじなる関数名;

	別の関数名(1, 2);
}



{
	console.info("----- 関数は'実行'することができる'値'　-----")

	const 数 = 1;

	数;

	const 関数 = () => {
		console.info("こんにちは世界！");
	};

	// 実行

	関数;

	関数();
}


{
	console.info("----- 変数のタイプ　-----")

	var 広域変数 = "広域変数1";
	広域変数 = "広域変数2";

	console.info(広域変数);

	let ローカル変数 = "ローカル変数1";
	ローカル変数 = "ローカル変数2";

	console.info(ローカル変数);

	const 定数 = 1;
	//	定数 = 2;

	//	console.info(定数);

}



{
	console.info("----- 関数は'スコープ'を持つ　-----")

	let 変数 = "関数の物じゃない変数";
	const 定数 = "関数の物じゃない定数";

	const 関数 = () => {
		let 変数 = "関数の変数";
		const 定数 = "関数の定数";
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
	console.info("----- 演算 -----")

	let 加算 = 1 + 1;
	console.info(加算);

	let 減算 = 1 - 1;
	console.info(減算);

	let 乗算 = 2 * 2;
	console.info(乗算);

	let 除算 = 1 / 2;
	console.info(除算);

	let 剰余 = 5 % 2;
	console.info(剰余);

	let 追加 = 1;
	追加 += 1;
	console.info(追加);

	let インクリメント = 1;
	console.info(++インクリメント);
	console.info(インクリメント++);
}



{
	const 値１ = null;
	const 値１大丈夫 = 値１ || "値１はfalsy";
	console.info(値１大丈夫);

	const 値２ = 10;
	const 値２大丈夫 = 値２ || "値２はfalsy";
	console.info(値２大丈夫);


	// よく見るパターン

	const f = () => {
		return "OK";
	}

	{
		const error = "";
		let 関数の値 = error;
		if (!error) {
			関数の値 = f();
		}
		console.info(関数の値);
	}

	{
		const error = null;
		const 関数の値 = error || f();
		console.info(関数の値);
	}

}



{
	const 値１ = "1";
	const 値２ = !値１;
	console.info(値２);
}



{
	let 値１ = 0b01011111;
	let 値２ = 0b11111010;

	let アンド = 値１ & 値２;
	console.info(アンド.toString(2));

	let オア = 値１ | 値２;
	console.info(オア.toString(2));

	let Xオア = 値１ ^ 値２;
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
	console.info("----- 制御構造(繰り返し)　-----")

	const 関数 = () => {

		for (let カウンター = 0; カウンター < 10; カウンター++) {
			console.info(カウンター);
		}

	};

	// 実行

	関数();
}



{
	console.info("----- 制御構造(繰り返しcontinue)　-----")

	loop1:
	for (let カウンター = 0; カウンター < 4; カウンター++) {
		if (カウンター === 2) {
			continue loop1;
		}
		console.log(カウンター);
	}



	console.info("----- 制御構造(繰り返しbreak)　-----")

	loop1:
	for (let カウンター = 0; カウンター < 4; カウンター++) {
		if (カウンター === 2) {
			break loop1;
		}
		console.log(カウンター);
	}
}



{
	console.info("----- 繰り返しのモダン　-----")

	const 関数 = (値: any) => {
		console.info(値);
	};

	// 実行

	let 配列 = [1, 2, 3];

	配列.forEach(関数);

}



{
	console.info("----- コールバックパターン -----")

	const 関数名 = (コールバック関数: any) => {
		コールバック関数("AAA");
	};

	const コールバック関数名 = (引数: any): void => {
		console.info(引数);
	}

	// 実行

	関数名(コールバック関数名);

}



{
	console.info("----- コールバックの書き方違い。(無名関数)  -----")

	const 関数名 = (関数: any) => {

		関数(1);
	};

	// 実行

	関数名((引数: any) => {
		console.info(引数);
	});

}



{
	console.info("----- コールバック前後。  -----")

	const 関数名 = (コールバック関数: any) => {
		console.info("コールバック前");
		コールバック関数(1);
		console.info("コールバック後");
	};

	// 実行

	関数名((引数: any) => {
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