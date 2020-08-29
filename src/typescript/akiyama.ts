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
        protected name: string;
        private secret: string; 
        constructor() {
            super();
            this.secret = "XXXXXXXX";
            this.name = "";
        }
    }
    
    class OfficeWoker extends Person {
        company: string;
    
        constructor(company: string) {
            super();
            this.name = "";
            this.company = company;
        }

        public isCoworker(person: OfficeWoker): boolean {
            return (this.company === person.company);
        }
    }
    
    const akiyama: OfficeWoker = new OfficeWoker("ABC");
    
    if (akiyama.moved) {
       console.info(akiyama.X);
       akiyama.walk();
       console.info(akiyama.X);
    }

    interface Hobbyist {
        category: string;
    }

    const x: OfficeWoker = new OfficeWoker("ABC");
    const y: OfficeWoker = new OfficeWoker("XYZ");

    const cowoker: boolean = x.isCoworker(y);

    class CatLover extends Person {
        private Motivation: number;
        private WatchedCatVideos: boolean;

        constructor(WatchedCatVideos: boolean){
            super();
            this.Motivation = 0;
            this.WatchedCatVideos = WatchedCatVideos;
        }

        public getMotivation(): number {
            return this.Motivation;
        }

        public watchCatVideos(): void {
            if (this.WatchedCatVideos) {
                this.Motivation++;
           }
        }     

    }

    const akiyama_private: CatLover = new CatLover(true);
    console.info ("私のライフは" + akiyama_private.getMotivation() + "です。");
    akiyama_private.watchCatVideos();
    console.info ("私のライフは" + akiyama_private.getMotivation() + "です。");

}