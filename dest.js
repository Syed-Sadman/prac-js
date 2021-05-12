//// ARRAY DESTRUCTURING


var array=[1,2,3,4,5];


var [a,b]=array;

console.log(a,b);



//// OBJECT DESTRUCTURING
// var obj={
//     name:"sabbir",
//     age:23,
//     country:"bangladesh",
//     birthplace:"Dinajpur"
// };

// var {country:c,age:g}=obj;

// // console.log(country,age);

// console.log(c,g);




var obj={
    name:"sabbir",
    age:23,
    country:"bangladesh",
    birth:{
        birthplace:"Dinajpur"
    }
};


const{birth : {birthplace:bpl}}=obj;
console.log(bpl);
