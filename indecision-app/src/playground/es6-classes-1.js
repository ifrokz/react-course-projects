class Person {
    constructor(name, age  = 0){
        this.name = name || 'Anonymous';
        this.age = age;
    }

    getGreetting(){
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student  extends Person {
    constructor (name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description = description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

// const me = new Student();
// console.log(me.getDescription());

// const other = new Student('Andrew Mead', 21, 'Computer Science');
// console.log(other.getDescription());


class Traveler extends Person {
    constructor (name , age, home){
        super(name, age);
        this.home = home;
    }

    homeLocation(){
        return this.home;
    }

    getGreetting(){
        let greeting = super.getGreetting();
        if(this.home){
            greeting += ` I'm visiting ${this.home}`;
        }
        return greeting;
    }
}

const traveler1 = new Traveler('Ivan Ruiz', 21);
console.log(traveler1.getGreetting());

const traveler2 = new Traveler(undefined, undefined, 'Nowhere');
console.log(traveler2.getGreetting());