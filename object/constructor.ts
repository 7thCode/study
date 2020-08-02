namespace A {
    class Animal {

        type: string; // プロパティ
    
        constructor(type: string) { // コンストラクタ
            this.type = type;
        }
    
        say() {　　// メソッド
            console.log(this.type);
        }
    }
    
    const myPet = new Animal("Snake");　// インスタンス作成
    myPet.say();
}
