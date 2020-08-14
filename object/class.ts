namespace B {
    
    class Animal {

        type: string = ""; // プロパティ
    
        say() {　　// メソッド
            console.log(this.type);
        }
    }
    
    const pochi = new Animal();　// インスタンス作成
    pochi.type = "Dog";     
    pochi.say();

    const tama = new Animal();　// インスタンス作成
    tama.type = "Cat";
    tama.say();

}
