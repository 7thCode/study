namespace A {
    class Animal {

        type: string; // プロパティ
    
        constructor() { // コンストラクタ
            this.type = "Dog";
        }
    
        intro() {　　// メソッド
            console.log(this.type);
        }
    }
    
    const myPet = new Animal();　// インスタンス作成
    myPet.intro();
}
