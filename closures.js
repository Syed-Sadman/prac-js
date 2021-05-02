// var num1=23;
// var num2=25;

// var sum=function(){
//     return num1+num2;
// }

// console.dir(sum());

function stopWatch(){
    var startTime=Date.now;
    function getDelay(){
        console.log(Date.now - startTime);
    }
    return getDelay;
}


var timer=stopWatch();
console.log(timer());