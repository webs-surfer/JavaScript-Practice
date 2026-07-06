class EventEmitter {

    constructor(){
        this.events = {} // object to store the events and their corresponding callbacks
    }

    on(eventName,callback){ // this function is used to register an event and its corresponding callback function
        if(!this.events[eventName]){ // if the event is not present in the events object then create an empty array for that event
            this.events[eventName] = [] // creating an empty array for that event
        }
        this.events[eventName].push(callback); // pushing the callback function to the array of that event
    }

    emit(eventName,...args){ // this function is used to emit an event and call all the callbacks of that event
        if(this.events[eventName]){ // if the event is present in the events object then call all the callbacks of that event
            this.events[eventName].forEach(callback => {
                callback(...args); // calling the callback function with the arguments passed to the emit function but even if argument is passed for certain callback function, all remaining function in event box will be called
            });
        }else{
            return;
        }
    }
}
const emitter = new EventEmitter();
emitter.on('greet',(name,age)=>{console.log(`Hello ${name} your age is ${age}`)});

emitter.on('greet',()=>{console.log('your age is 20')})
emitter.emit('greet','rohan',20);



