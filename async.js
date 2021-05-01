/*const processOrder=(customer)=>{
    console.log("Processing order for customer 1");
    var currentTIme=new Date().getTime();
    while(currentTIme + 3000 >= new Date().getTime());          /// this loop is used for 3 sec delay 3000 milisecond from current time 

    console.log("Order processed for customer 1");
};

//processing order for customer 1 will be displayed first 
console.log("take order for customer 1");       // then this line will be shown up 
processOrder();             /// then there will be a delay of 3 sec for calling this function as we used while loop which causes 3 sec delay to process 
                            // order processed for customer 1 will be displayed at this point after 3 sec delay (ref: Line 6);

console.log("completed order for customer 1");//lastly this line will be printed to console 







/// we can write the above code using built in function called "setTimeout(()=>{},time in millisecond"

const processOrder=(customer)=>{
    console.log("Processing order for customer 1");
    setTimeout(()=>{
        console.log("cooking completed");
    },3000);

    console.log("Order processed for customer 1");
};

console.log("takes order for customer 1");
processOrder();
console.log("Completed order for customer 1");



*/



//using callback in 

const takeOrder=(customer,callback)=>{
    console.log(`Order received for ${customer}`);
     callback(customer);
}


const processOrder=(customer,callback)=>{
    console.log(`Order processed for ${customer}`);


setTimeout(()=>{
    console.log(`cooking completed`);
    console.log(`order processed for ${customer}`);
    callback(customer);

},3000);
}

const completeOrder=(customer)=>{
    console.log(`completed order for ${customer}`);

}


takeOrder("customer1",(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer);
    })
});