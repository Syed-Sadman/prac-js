
/*
const promise=new Promise((resolve,reject)=>{                   //// new Promise keyword should be capital 
        // do something 
});                 

*/

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




meeting 
    .then(addCalendar)
    .then((res)=>{
        console.log(res);       //JSON.Stringfy needer when we return object as a result 
    })
    .catch((err)=>{
        console.log(err.message);
    })