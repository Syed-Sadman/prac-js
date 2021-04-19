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










// //Destructuring assignment  : It is a feature that makes it possible to extract values from arrays and objects with ease
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









////Spread Syntax 
