namespace E {

    class Animal {
        public voice: string;
        constructor() {
            this.voice = "";
        }

        Say() {
            console.log(this.voice);
        }
    }

    class Dog extends Animal {
        public voice: string;
        constructor() {
            super();
            this.voice = "Bowwow";
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

        Say() {
            console.log(this.voice);
            if (this.keep) {
                this.keep.Say();
            }
        }
    }

    const pochi = new Dog();

    const yamada = new Human();

    yamada.keep = pochi;

    yamada.Say();

}