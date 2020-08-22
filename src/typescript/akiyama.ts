namespace Akiyama {

    class LivingThing {
        bless_count: number;
        moved: boolean;
        X: number;
        Y: number;
    
        constructor(bless: number) {
            this.X = 0;
            this.Y = 0;
            this.bless_count = bless;
            this.moved = true;
        }
    
        walk() {
         this.X++;
        } 
    }
    
    class Human extends LivingThing {
        think: boolean;
    
        constructor() {
            super(60);
            this.think = true;
        }
    }
    
    class Person extends Human {
        name : string;
    
        constructor() {
            super();
            this.name = "";
        }
    }
    
    class OfficeWoker extends Person {
        company: string;
    
        constructor(company: string) {
            super();
            this.company = company;
        }
    }
    
    const akiyama = new OfficeWoker("ABC");
    
    if (akiyama.moved) {
       console.info(akiyama.X);
       akiyama.walk();
       console.info(akiyama.X);
    }

}