
interface Hoge {
     piyo: number;
     Geho(): void;
}

class Hoge1 implements Hoge {

    public piyo: number = 1;
    
    public Geho() {
        this.piyo = this.piyo + 9;
    }
}

class Hoge2 extends Hoge1 {
    public piyopiyo: number = 1;
}


const i: Hoge = new Hoge2();
const j: Hoge = new Hoge1();