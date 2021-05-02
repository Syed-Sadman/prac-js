let p= new Promise((resolve,reject)=>{
    let a=1+2
    if(a==2){
        resolve("valid");
    }
    else{
        reject("invalid")
    }
});


p.then((mes)=>{
    console.log(`this is the resolve  ${mes}`);
})

.catch((mes)=>{
    console.log(`this is the catch  ${mes}`);
})