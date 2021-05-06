function Person(name,age){
    let person=Object.create(Person.prototype);         // "object.create" helps to inherit the properties of parent to the child 
    
    person.name=name;
    person.age=age;                             // every function is by default a constructor function as it constructs a object 

    return person;
}


Person.prototype={
    eat(){
        console.log("person is eating")
    },
    play(){
        console.log("person is playing")
    },
    sleep(){
        console.log("person is sleeping")
    }

};

const sakib=Person("Sakib", 34);

console.log(sakib);

