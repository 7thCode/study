namespace Oda {

class LivingThing {
     bless_count: number;
     moved: boolean;
    X: number;
    Y: number;

    constructor() {
        this.X = 0;
        this.Y = 0;
        this.bless_count = 60;
        this.moved = true;
    }

    walkToNorth() {
        this.Y--;
    }

    walkToSouth() {
        this.Y++;
    }

    walkToEast() {
        this.X++;
    }

    walkToWest() {
        this.X--;
    } 
}

class Human extends LivingThing {
    think: boolean;
    constructor() {
        super();
        this.think = true;
    }
}

class Person extends Human {
    name : string;
    private secret:string;
    constructor(name: string) {
        super();
        this.secret = "******SECRET******";
        this.name = name;
    }
}

class Parent extends Person {
    partner:Parent | null;
    children: Person[];
   
    constructor(name: string) {
        super(name);
        this.partner = null;
        this.children = [];
    }

    marriage(partner:Parent) {
        this.partner = partner;
        partner.partner = this;
    }

    addChild(name: string) {
        if(this.partner) {
            const child = new Person(name)
            this.children.push(child);
            this.partner.children.push(child);
        }
    }

    childCount() {
        return this.children.length;
    }
   
}

const sato: Parent = new Parent("sato");
const tanaka: Parent = new Parent("tanaka");
tanaka.marriage(sato);
sato.addChild("musuko");
console.log(tanaka.childCount());
console.log(sato.children[0].name);


// const takagi = new Takagi.Hobbyist("Takagi", ["Futsal", "Jogging"]);
// takagi.IntroduceHobby();


// クラスの基本

/*

class Person {
    name: string = "";
    age: number = 0;
}

const yamada = new Person();
yamada.name = "yamada";
yamada.age = 20;

console.log(yamada.age);

const tanaka = new Person();
tanaka.name = "tanaka";

console.log(tanaka.age);

*/


/*

class Person {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const yamada = new Person("yamada", 20);

const tanaka = new Person("tanaka", 30);

*/

/*

interface IPerson {
    name: string;
    age: number;
}

interface IStudent {
    classroom: string;
}

interface IOfficeWorker {
    company: string;
}

class Student implements IPerson ,IStudent {
    name: string;
    age: number;
    classroom: string;

    constructor(name: string, age: number, classroom: string) {
        this.name = name;
        this.age = age;
        this.classroom = classroom;
    }
}

class OfficeWorker implements IPerson , IOfficeWorker {
    name: string;
    age: number;
    company: string;

    constructor(name: string, age: number, company: string) {
        this.name = name;
        this.age = age;
        this.company = company;
    }
}

*/

/*

class Name  {
    first: string;
    middle: string;
    last: string;

    constructor(first: string, middle: string, last: string) {
        this.first = first;
        this.middle = middle;
        this.last = last;
    }
}

class Company  {
    type: string;
    name: string;

    constructor(type: string, name: string) {
        this.type = type;
        this.name = name;
    }
}

class Profession  {
    type: string;
    company: Company;

    constructor(type: string, company: Company) {
        this.type = type;
        this.company = company;
    }
}

class Person {
    name: Name;
    age: number;
    profession: Profession;

    constructor(name: Name, age: number, profession: Profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}

const name: Name = new Name("yamada", "", "hajime");
const company: Company = new Company("us", "Apple");
const profession: Profession = new Profession("officer", company);

const yamada = new Person(name, 30, profession);

*/

}