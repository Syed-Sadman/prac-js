const nme='sadman';
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