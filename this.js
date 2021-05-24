// // 1. implicit bindings 

// var Person=function(name,age){
//     return {
//         name:name,
//         age:age,
//         printName:function(){
//             console.log(this.name);
//         },
//         father : {
//             name:"mr.xxx",
//             age:age,
//             printName: function(){
//                 console.log(this.name);
//             }
//         }
//     };
// }

// var sakib=Person("SHAKib",34);

// sakib.printName();
// sakib.father.printName();




//2. explicit bindings 

// var printNm=function(){
//     console.log(`${this.name} is ${this.age} years old and he is ${v}`);
// }; 




// var sakib={
//     name:"Shakib",
//     age:34,
//     method: function(){
//         console.log(`${this.name} is ${this.age} years old `);
//     },
//     function(){
//         console.log(this.method());
//     }
// };

// sakib.function();

//3. new binding /////same as prototype new constructor 






/////////////  FAT ARROW => FUNCTION FOR clearing confusion of "this" KEYWORD

// let jsr={
//     name:'JavaScript',
//     library : ['React', 'Angular','Vue'],
//     printLibrary:function(){
//         console.log(this);//this will refer to the jsr object
//         this.library.forEach(function(a){
//             console.log(this);  //window this or object this 
//             console.log(`${this.name} has library like ${a}`);
//         })
//     }
// }

// jsr.printLibrary();





////



let jsr={
    name:'JavaScript',
    library : ['React', 'Angular','Vue'],
    printLibrary:function(){
        //console.log(this);
        this.library.forEach((a)=>{
         //   console.log(this);
            console.log(`${this.name} has library like ${a}`);
        })
    }
}

jsr.printLibrary();



