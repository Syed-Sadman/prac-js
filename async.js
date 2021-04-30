const processOrder=(customer)=>{
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

