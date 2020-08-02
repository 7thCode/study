namespace D {

    class Animal {
        public voice: string;
        public eyes: number;
        public legs: number;
        public tail: boolean;
        constructor() {
            this.voice = "";
            this.eyes = 2;
            this.legs = 4;
            this.tail = true;
        }

        Say() {
            console.log(this.voice);
        }
    }

    class Dog extends Animal {
        constructor() {
            super();
            this.voice = "Bowwow";
        }
    }

    class Cat extends Animal {
        constructor() {
            super();
            this.voice = "Meow";
        }
    }

    class Fox extends Animal {
        constructor() {
            super();
            this.voice = "Kon";
        }
    }

    class Human extends Animal {
        constructor() {
            super();
            this.legs = 2;
            this.tail = false;
            this.voice = "Hi!";
        }
    }

  //  const pochi = new Dog();
  //  pochi.Say();
  //  console.log(pochi.legs);

 //   const gon = new Fox();
 //   gon.Say();
 //   console.log(gon.legs);

    const yamada = new Human();
    yamada.Say();
    console.log(yamada.legs);

}