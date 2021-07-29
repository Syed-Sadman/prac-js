var array=[1,2,3,4,5];


//mapping through array indexes
// var newArr=array.map((num)=>{
//     return 2*num;
// });


// console.log(array);
// console.log(newArr);


//mapping as a object
var objArr=array.map((n)=>{
    return {value:n}
})

console.log(objArr);