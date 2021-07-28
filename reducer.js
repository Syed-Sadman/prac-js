var arr=[1,2,3,4];

// let sum=0;
// for(let n of arr){
//     sum+=n;
// };
// console.log(sum);

//accumulator is the initial value which is initialized in the second parameter of reduce method

var red=arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0);

console.log(red);

//the reduce method is same as the loop 