// set timeout and set interval: 


// Set TimeOut: Executes a function once after a specified delay (in milliseconds)

// settimeout(function, delay, param1, param2, ...);

// syntax: setTimeOut(funcName, time(milliseconds))


// function hello() {
//     console.log("Hello");
// }

// setTimeout(hello, 5000)


// function sayBye(){
//     console.log("Bye");
    
// } 

// setTimeout(sayBye, 10000);



// 2nd method: 

// setTimeout(() => {
//     console.log("heyy");
    
// }, 12000)


// setTimeout with return

// function delayMessage(name, time){

//    return setTimeout(() => {
//     console.log(`Hello, ${name}, this message after ${time} Seconds`);
//    }, time*1000)

// }
// delayMessage("Rahman", 4)



// function delayMessage(name, time){
 
//     return setTimeout(() => {
//         console.log("Kaise Ho Bhai?");
//     }, time*1000);

// }
// delayMessage("Abdul Rahman", 3)


// function sumNum(num1, num2){

//     return setTimeout(() => {
//         console.log(num1 + num2);
        
//     }, 4000)

// }
// sumNum(12, 6)

// function subNum(num1, num2){
//   return setTimeout(() => {
//     console.log(num1- num2);
    
//   })    
// }
// subNum(3, 5);

// function myName(college, year){
//     return setTimeout(() => {
//         console.log(college, year);
        
//     }, 5*1000)
// }
// myName("Dcet", 4)

// setimeout arrow function containing parameters

// setTimeout((name, rollNo) => {
//     console.log(name, rollNo);

// }, 4*1000, "Rahman", 5049)

// setTimeout((age, isAlive) => {
//    console.log(age, isAlive);
   
// }, 3*1000, 20, true)

// sum of two num using setTimeout.

function mySum(a, b){
    return setTimeout(() => {
        console.log(`${a + b}`);
    }, 2000)
}
mySum(2, 4);