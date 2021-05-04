// let p= new Promise((resolve,reject)=>{
//     let a=1+2
//     if(a==2){
//         resolve("valid");
//     }
//     else{
//         reject("invalid")
//     }
// });


// p.then((mes)=>{
//     console.log(`this is the resolve  ${mes}`);
// })

// .catch((mes)=>{
//     console.log(`this is the catch  ${mes}`);
// })

const recvid1=new Promise((resolve,reject)=>{
    resolve("video 1 recorded")
})

const recvid2=new Promise((resolve,reject)=>{
    resolve("video 2 recorded")
})

const recvid3=new Promise((resolve,reject)=>{
    resolve("video 3 recorded")
})


Promise.all([
    recvid1,
    recvid2,
    recvid3
]).then((mes)=>{
    console.log(mes);
})