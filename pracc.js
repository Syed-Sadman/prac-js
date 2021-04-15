/*const nme='sadman';
const another=
`hi ${nme} ${2+4},         
thank you for helping me out 
regards 
john`                           //  ${placeholder} this will allow to //${2+4} can be added to this and this will result 6 in output
console.log(another);                                // this is the benefit of using template literals the backtik ``




// Object oriented programming in JavaScript 
// without making it an object 
let baseSalary=333;
let overTime=22;
let rate=444;

function getWage(baseSalary,overTime,rate){
    return baseSalary + (overTime*rate);
}


//same code as an object 
let employee={
    baseSalary: 333,
    overTime:22,
    rate:444,
    getWage: function(){
        return this.baseSalary + (this.overTime*this.rate);
    }
};
employee.getWage();


//object defining and method
let circle={
    radius : 1,
    location:{
        x:1,
        y:1
    },
    draw:function(){
        console.log('draw');                 //draw:function is a method 
    }
 };
circle.draw();
*/

//2 ways to create an object 1.factory function 2. constructor function 
//factory function 
/*
function createCircle(radius){
    return{
        radius,
        draw:function(){
        console.log('draw');
    }
    
    };
}
const circle=createCircle(1);

//Constructor function 
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');

    }
}

const another= new Circle(1);
*/

let arr=[];

let i=0;
while(i<5){
    arr.push(i);
    i++;
}

let savearr=arr;
console.log(savearr);


let arr2=[];
let j=5;
while(j>=0){
    arr2.push(j);
    j--;
}
let savearr2=arr2;
console.log(savearr2);