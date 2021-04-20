//10 Js features we need to know before starting React/Vue/Angular 


////  1.shorthand object assignment 

//old school way 
const first="Sadman";
const channel="YouTube";


const ewtube={
    first:first,
    channel:channel
};


// //shorthand way
const first="Sadman";
const channel="YouTube";


const ewtube={
    first,
    channel
};










// // 2. Destructuring assignment  : It is a feature that makes it possible to extract values from arrays and objects with ease
// //objects traditional way of extraction 

const forichoy={
    first:"Syed",
    last:"sabbir"
};

const first=forichoy.first;
const last=forichoy.last;


// destructured way of objects 
const forichoy={
    first:"Syed",
    last:"sabbir"
};

const {first,last}=forichoy;
const {first:f,last:l}=forichoy; //object illiess


///Array destructuring 

const namme=["Syed","Sabbir"]

const first=namme[0];
const last=namme[1];

//new way of array destructuring 
const [first,last]=namme;









////  3.  Spread Syntax
// it is represented by 3 dots 
 // first use is copy of array/object

    const arrr=[1,2,3];
        const arrrCopy=[...arrr]; //a copy of arrr is now assigned in arrrcopy



    const obj={
        fist:"wayen",
        list:"kew"
    };
    const copyObj={...obj};//a copy of obj is now assigned in copyObj



// array concatination using spread syntax 

let arr=[1,2,3,4];

let arr2=[5,6,7,8];

let arrCon=[...arr,...arr2];

// merge object using spread 

let obj1={foo:'x',hoo:'y'};
let obj2={boo:'a',aoo:'b'};

let conObj={...obj1,...obj2};









/// Optional chaining 