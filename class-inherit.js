class Person{               
    ///// THIS IS PARENT CLASS
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Cricketer extends Person{

    //// THIS IS SUB/CHILD CLASS
    constructor(name,age,type,country){
        super(name,age);
        this.name=name;
        this.age=age;
        this.type=type;
        this.country=country;

        
    }
    play(){
        console.log(`${this.name} is playing`);
    }
}


const sakib= new Cricketer('shakib',34,'All-rounder','Bangladesh');
//console.log(sakib);
sakib.play();