/*Description
Objective:
To work with JavaScript Error Handling

Scenario:
John is creating a tool to manage the power status of appliances in his smart home. 
He wants to ensure that each appliance (like a TV, Lamp, or Oven) can be turned on or off programmatically. 
The system should track whether an appliance is already on or off. 
If someone tries to turn on an appliance that's already on, or turn off an appliance that's already off, 
the program should throw an error and handle it gracefully without crashing. 
In all cases, a final message should indicate the completion of the operation.


Sample Output:
 console.log(turnOnAppliance(TV));  
 console.log(turnOnAppliance(Lamp));   
 console.log(turnOnAppliance(Oven));   
 console.log(turnOffAppliance(TV));    
 console.log(turnOffAppliance(Lamp));
 console.log(turnOffAppliance(Oven));
 console.log(turnOffAppliance(TV));
*/

const appliances=[
    {
        name: "TV",
        isTurnedOn: false
    },
    {
        name: "Lamp",
        isTurnedOn: false
    },
    {
        name: "Oven",
        isTurnedOn: false
    }
]
function turnOnAppliance(appliance){
    try{
        if(appliance.isTurnedOn){
            throw new Error(`${appliance.name} is already turned on`);
        }
    appliance.isTurnedOn=true
    console.log(appliance.name," is turned on");
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        console.log("Program completed")
    }
}
function turnOffAppliance(appliance){
    try{
        if(!appliance.isTurnedOn){
         throw new Error(`${appliance.name} is already turned off`);
        }
    appliance.isTurnedOn=false;
    console.log(appliance.name," is turned off");
    }
    catch(error){
        console.log("An error occurred: ",error.message);
    }
    finally{
        console.log("Program completed")
    }
}
