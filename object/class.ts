namespace B {
    class Animal {

        type: string = ""; // プロパティ
    
        say() {　　// メソッド
            console.log("bowwow");
        }
    }
    
    const myPet = new Animal();　// インスタンス作成
    myPet.say();
}
