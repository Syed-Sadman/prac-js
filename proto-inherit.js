function Person(name,age){
    this.name=name;             //parent proto
    this.age=age;
}


function Cricketer(name,age,type,country){
    Person.call(this);                  //sub/child proto 
    this.name=name;
    this.age=age;
    this.type=type;
    this.country=country;
}

Person.prototype={
    eat:function(){
        console.log(`${this.name} is eating`);
    }
}



Cricketer.prototype=Object.create(Person.prototype)     // in this way the contructor will be inherited from parent to sub/child 

Cricketer.prototype.constructor=Cricketer;              // in order to make js understand the override for using person.call(this) in cricketer constructor 

Cricketer.prototype.play=function(){
    console.log(`${this.name} is playing`);
}

const sakib= new Cricketer('shakib',34,'All-rounder','Bangladesh');
//console.log(sakib);
sakib.play();


