function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`)
        if(location==='Google'){
            resolve('Google says hi')
        }else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('Processing response')
        resolve(`Extra Information ${response}`)
    })
}


// makeRequest('Goole').then((message)=>{
//     console.log('Response received')
//     return processRequest('responsed')
// }).then((processedResponse)=>{
//     console.log(processedResponse)
// }).catch((err)=>{
//     console.log(err);
// })


async function doWork(){
   try{
   const req=await makeRequest('Googe');
   console.log('Response received');
   const req2 =await processRequest('Response');
   console.log(req2);
   } catch(err){
       console.log(err);
    
   }
   
}

doWork();