// function Person(name,age){                      // constructor function must start with CamelCase 
//     let person=Object.create(Person.prototype);         // "object.create" helps to inherit the properties of parent to the child 
    
//     person.name=name;
//     person.age=age;                             // every function is by default a constructor function as it constructs a object 

//     return person;
// }


// Person.prototype={
//     eat(){
//         console.log("person is eating")
//     },
//     play(){
//         console.log("person is playing")
//     },
//     sleep(){
//         console.log("person is sleeping")
//     }

// };

// const sakib=Person("Sakib", 34);

// console.log(sakib);






function Person(name,age){                      // constructor function must start with CamelCase 
   // let person=Object.create(Person.prototype);         // "object.create" helps to inherit the properties of parent to the child 
                                // we don't need to use this as JS automatically name this thing as "this" instead of person
    this.name=name;
    this.age=age;                             // every function is by default a constructor function as it constructs a object 

   // return person  //this         /// don't need to write this return statement ..Js automatically returns this'
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



const newp=new Person("sakibddd",444);

newp.sleep();