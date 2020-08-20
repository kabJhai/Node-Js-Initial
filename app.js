//Events 
const events = require("events");
//Events emiter
const EventEmitter = events.EventEmitter;

class Store extends EventEmitter{
   init(name,job){
        this.name = name;
        this.job = job;
        this.emit('store-init',this.name);
    }
    
    getFullName(){
        return this.name;

    }
    getJob(){
        return this.job;
    }
}

let PK = new Store();
PK.on('store-init',(name)=>{
    console.log("Event initialized",name);
})
PK.init("Pikachu","Charachter")

console.log("Ended");