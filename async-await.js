// async function friendlyFunction(){            //async keyword makes the synchronous function as a asynchronous and returns promise
//     return `hello`;
// }

// console.log(friendlyFunction());



const hasMeeting=false;

const meeting=new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails ={
            title:"Coffee meet",
            time: "10.00 PM",
            location: "Uttara"
        };
        resolve(meetingDetails);
    }else{
        reject(new Error("meeting already scheduled") );
    }
});



const addCalendar=(meetingDetails)=>{
        const calendar= `${meetingDetails.title} has be scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    }




// meeting 
//     .then(addCalendar)
//     .then((res)=>{
//         console.log(res);     
//         })
//     .catch((err)=>{
//         console.log(err.message);
//     })

//instead of the code above we will write the below code 




// time to use async function 

async function myMeeting(){
 try{   const meetingDetails= await meeting;
    const calendar= await addCalendar(meetingDetails);
    console.log(calendar);
 }
    catch{
        console.log(`something wrong happened`)
    }
}

myMeeting();