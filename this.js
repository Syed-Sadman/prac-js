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

var printNm=function(){
    console.log(this.naam);
} 




var sakib={
    naam:"Shakib",
    age:34
};


printNm.call(sakib);                    //function.call(object name)  



//3. new binding /////same as prototype new constructor 