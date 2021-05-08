var Person=function(name,age){
    return {
        name:name,
        age:age,
        printName:function(){
            console.log(this.name);
        },
        father : {
            name:"mr.xxx",
            age:age,
            printName: function(){
                console.log(this.name);
            }
        }
    };
}

var sakib=Person("SHAKib",34);

sakib.printName();
sakib.father.printName();