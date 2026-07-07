function debounce( func, delay){ // this function will take two parameters, first is the function which we want to call and second is the delay time in milliseconds
    let timer // this is the variable which will store the timer id of the setTimeout function
    return function(...args){ // this function will return a new function which will be called when the event is triggered and it will take any number of arguments
        clearTimeout(timer) // this will clear the previous timer if it is still running and will prevent the function from being called multiple times
        timer = setTimeout(()=>{ // this will set a new timer and will call the function after the delay time
            fn.apply(this,args) // this will call the function with the arguments passed to the new function and will also set the this value to the new function
        },delay)
    }
}
// import { useState, useEffect } from "react";
// function debounce() {
//     const [name, setName] = useState(""); 
//     useEffect(()=>{
//         const timer = setTimeout(() => { 
//             if (name !== "") { 
//             console.log("Name is : ", name);
//             }
//         }, 1000);
//         return () => {clearTimeout(timer);} 
//     ,[name]})
// }

