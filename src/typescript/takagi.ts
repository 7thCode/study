// takagi!

namespace Takagi{

    class LivingThing {
        bless_count: number;
        moved: boolean;
        X: number;
        Y: number;

        constructor(bless: number){
            this.X = 0;
            this.Y = 0;
            this.bless_count = bless;
            this.moved = true;
        }

        walk(){
            this.X++;
        }
    }    

    class Human extends LivingThing {
        think: boolean;
        constructor(bless: number){
            super(bless);
            this.think = true;
        }
    }

    class Person extends Human {
        name: string;
        constructor(){
            super(60);
            this.name = "";
        }
    }

    class OfficeWorker extends Person {
        company: string = "";
        constructor(company: string){
            super();
            this.company = company;
        }
    }

    const takagi = new OfficeWorker("ABC");

    if(takagi.moved){
        console.info(takagi.X);
        takagi.walk();
        console.info(takagi.X);
    }

}