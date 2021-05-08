class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        console.log("person is eating")
    }
    play(){
        console.log("person is playing")
    }
    sleep(){
        console.log("person is sleeping")
    }
}

const newp=new Person("sakibddd",444);

newp.sleep();








//random exercise for understanding 


function Kelas(name, age){
    this.name=name;
    this.age=age;

    this.sleep=function(){
        console.log(`${this.name} is sleeping right now` )
    }
}

const ahmed=new Kelas("Shakib",75);

ahmed.sleep();