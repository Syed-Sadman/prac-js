//const promise1=Promise.resolve(`promise 1 resolved`);     //this line works same as the code written in line 2,3,4
const promise1=new Promise((resolve,reject)=>{
    resolve(`promise 1 resolved`);

})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`promise 2 has been resolved`);
    },2000);
    
});



// promise1.then((res)=>{console.log(res)});

// promise2.then((res)=>{console.log(res)});

Promise.race([promise1,promise2]).then((res)=>{          // this code will return all the promises at a time after the interval 
    console.log(res);                                    //Promise.race will return the promise which resolves first and ends execution
});