/*Description
Objective:
To work with JavaScript Inheritance.

Problem Description:
Create a JavaScript application to demonstrate class inheritance and method overriding using two classes: Bike and ElectricBike. 
The Bike class includes properties like brand, color, and speed, and defines methods to accelerate, brake based on speed, and stop the bike.
The ElectricBike class inherits Bike by adding battery capacity, current charge, and distance, and overrides the accelerate method to 
include battery checks. Additional methods for charge battery and display battery status are implemented to manage battery behavior. 
Complete the class definitions to simulate real-world bike and electric bike functionality using object-oriented principles in JavaScript.

Sample Input for Normal Bike:
const normalBike = new Bike("Hero", "Red", 0);
normalBike.accelerate();
normalBike.brake();
normalBike.stop();

Console Output:
Sample Input for Electric Bike:
const eBike = new ElectricBike("TeslaBike", "Black", 0, 100, 40, 10);
eBike.displayBatteryStatus();
eBike.accelerate();
eBike.accelerate();
eBike.brake();
eBike.stop();
eBike.chargeBattery();
eBike.displayBatteryStatus();*/


class Bike{
    constructor(brand,color,speed){
        this.brand=brand;
        this.color=color;
        this.speed=speed;
    }
    accelerate(){
        console.log(this.brand+" is accelerating. Speed is now "+this.speed+" km/h.");
    }
    brake(){
        console.log(this.brand+" is braking. Speed is now "+this.speed+" km/h.");
    }
    stop(){
        console.log(this.brand+" has stopped");
    }
}

class ElectricBike extends Bike{
    constructor(brand,color,speed,batteryCapacity,currentCharge,distance){
        super(brand,color,speed);
        this.batteryCapacity=batteryCapacity;
        this.currentCharge=currentCharge;
        this.distance=distance;
    }
    accelerate(){
        console.log(this.brand+" (Electric) is accelerating. Speed is "+this.speed+" km/h. Battery: "+this.currentCharge);
        this.currentCharge=this.currentCharge-5;
        console.log(this.brand+" (Electric) is accelerating. Speed is "+this.speed+" km/h. Battery: "+this.currentCharge);
    }
    brake(){
        console.log(this.brand+" (Electric) is braking. Speed is "+this.speed+" km/h. Battery: "+this.currentCharge);
    }
    chargeBattery(){
        let charging = 100-this.currentCharge;
        this.currentCharge=this.currentCharge+charging;
        if(this.currentCharge===100)
            console.log(this.brand+"'s battery is now fully charged.");
    }
    displayBatteryStatus(){
        console.log(this.brand+" battery charge: "+this.currentCharge);
    }
}
