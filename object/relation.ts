namespace E {

    class Animal {
        public voice: string;
        constructor() {
            this.voice = "";
        }

        public Say() {
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

    class Human extends Animal {
        public voice: string;
        public keep: Animal | null;
        constructor() {
            super();
            this.voice = "Hi!";
            this.keep = null;
        }

        public Say() {
            console.log(this.voice);
            if (this.keep) {
                this.keep.Say();
            }
        }
    }

    const pochi = new Dog();
    const tama = new Cat();
    const yamada = new Human();

    yamada.keep = pochi;

    yamada.Say();

    yamada.keep = tama;

    yamada.Say();

}