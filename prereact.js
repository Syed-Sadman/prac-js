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









/// 4. Optional chaining 
// It is represented by ( ?. ) and provides a safe way to access nested object properties, even if an intermediate property doesn't exist 

//for object 

const person={
    name:"wayne",
    details:{
     age:28,
     address:{
         city:'gotham'
     }   
    }
};

console.log(
    person.details &&                           // with optional chaining we don't need to write this much 
    person.details.address &&
    person.details.address.city
)

//with optional chaining 
console.log(person?.details?.address?.city);


// for array 
const person={
    name:'bruce',
    hobbies:[
        {
         name: 'crime fighting'   
    }
    ]
}

console.log(
    person.hobbies &&
    person.hobbies.length &&
    person.hobbies[0] &&                //it can be written simply 
    person.hobbies[0].name
)

//with optional chaining 
console.log(person?.hobbies?.[0]?.name)














//5. nullish coalescing operator 



























// 6. Ternery operator /////
///Main usage in REACT for conditionally rendering with JSX 

//the actual syntax  
    condition? expressionIfTrue : expressionIfFalse

// Example 
    const loggedIn=true;
    const name=loggedIn? "Sadman":"Sabbir";
    console.log(name);//output will be Sadman as it is in the true value position     





//Example in React with ternery operator 

const App = () => {
    const loggIn=true;
    return(
        <div>
            {  loggIn ? (<span>Viswas</span>) : (<span>Guest</span>)}       </div>   //condition? expressionIfTrue : expressionIfFalse
    )                                                                       
}





//7. Template literals 

const ehh="Sadman";
const grt="hello";
const sport="football";

console.log( grt +' ' + ehh + 'do you like '+ sport + '?');

//using template literals 
console.log(`${grt}`)