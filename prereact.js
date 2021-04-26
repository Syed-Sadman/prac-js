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
console.log(`${grt} ${ehh} do you like ${sport}?`);














/// 8. Arrow functions 

//traditional function 
function greet(){
    console.log ("Hello");
}

//arrow function 
const greet=()=>{               //const keyword followed by function name and parentheses 
    console.log("Hello");
}


//traditional function with single parameter 
function greet(name){
    console.log(`hello ${name}`);
}

// arrow with single parameter 
const greet = name => {                 // the parameter name doesn't need the parentheses when there is only a single parameter 
    console.log(`Hello ${name}`);
}



//traditional function with implicit return 
function getName(){
    return "Sabbir";
}

// arrow function for implicit return 
const getName = () => "Sabbir"                        // more precise and short code 


























// 9. import and Export statement 


/////////Named Exports 
///consider the filename is file1.js

const firstname="wayne";
const lastname="bruce";

export{ firstname, lastname};


//export can be inlined 


export const firstname="wayne";
export const lastname="bruce";


/////////////exporting completes////////////

//now time to import these file1.js file 


import {firstname,lastname} from './file1.js'

console.log(firstname);//output "wayne "

//we can import all the files that are used for export using * sign 

import * as person from './file1.js'   ///it will import everything as "person" from file1 

console.log(person.firstname);// output "wayne" 



//if export file have same name then we need to use iliess 
import {firstname as username} from './file1'
console.log(username);// wayne out 