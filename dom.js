let array=[];
let increment=0;

let container=document.querySelector('.container');


//fast way to render in dom
/// this is also called batch update 

while(increment<10000){
    array.push(increment++);
    
}
                  

container.innerHTML=array.join(' ')  // finally shobkisu call kore ekta dom operation kore shob kaj shesh  
// ////The join() method returns the array as a string.
//The elements will be separated by a specified separator. The default separator is comma (,).

//  Note: this method will not change the original array.




//slow way to render in dom
while(increment<10000){
    increment++
    container.innerHTML += ' ' +increment;      // takes much time to repaint continuously 
}   