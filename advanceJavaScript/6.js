// SetInterval:

// it executes a function repeatedly at specified intervals (in milliseconds).

// syntax: 
// js
// copy code
// setInterval(function, delay, parameter1, parameter2,.......)


// setInterval(() => { console.log("Heyyy")}, 2000)   //one line setInterval example

// setInterval((a, b) => {
//     console.log( a + b);
    
// }, 3000, 20, 40)

// setInterval(() => {
//     console.log("hello");
    
// }, 1000);



// we can use setTimeout to  stop a setInterval function:

// let myName = setInterval(() => {
//     console.log("Rahman");
    
// }, 1000);

// clearInterval(myName);       //this code will stop my setinterval immediately, so to avoid it we need to 
                             // put it into a setTimeout
  
// setTimeout(() => {
//     clearInterval(myName)
// }, 5000)                             



