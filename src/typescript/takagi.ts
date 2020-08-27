// takagi!

namespace Takagi{


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
        private name : string;
    
        constructor(name: string) {
            super();
            this.name = name;
        }

        protected IntroducePerson(): void{
            console.log("名前: " + this.name);
        }
    }
    
    class OfficeWoker extends Person {
        company: string;
    
        constructor(name:string, company: string) {
            super(name);
            this.company = company;
        }
    }


    // 20200822 宿題
    class Hobbyist extends Person {
        private genres: string[];

        constructor(name: string, genres: string[]){
            super(name);
            this.genres = genres;
        }

        public IntroduceHobby(): void{
            this.IntroducePerson();

            // process.stdout.write: 改行しない
            process.stdout.write("趣味: ");　
            this.genres.forEach(genre => {
                process.stdout.write(genre + " ");
            })
        }
    }

    const takagi = new Hobbyist("Takagi", ["Futsal", "Jogging"]);
    takagi.IntroduceHobby();


    /*
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
        public name: string;
        private secret: string;

        constructor(){
            super(60);
            this.secret = "******SECRET******";
            this.name = "";
        }
    }

    class OfficeWorker extends Person {
        company: string = "";
        constructor(company: string){
            super();
            this.name = "";
            this.company = company;
        }
        public isCoworker(person: OfficeWorker): boolean {
            return (this.company === person.company);
        }
    }

    const x = new OfficeWorker("ABC");
    const y = new OfficeWorker("XYZ");

    const coworker: boolean = x.isCoworker(y);
    console.info(coworker);
    */


    // const takagi = new OfficeWorker("ABC");

    // if(takagi.moved){
    //     console.info(takagi.X);
    //     takagi.walk();
    //     console.info(takagi.X);
    // }

    // console.info(takagi.name);
}