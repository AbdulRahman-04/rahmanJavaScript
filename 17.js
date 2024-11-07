// Conditionals in javascript:

// there are mainly 4 types of conditionals in js:
// if 
// if...else
// if...else..if
// nested if and nested if...else

// if statement: We use the if keyword to execute code based on some specific condition.

/*
    syntax: 
            declaration
            if(condition){
                          code block to be executed
            }


*/

// program to check if a number is odd or even

// let x = 3;
// if(x%2==0){
//     console.log("x is even");
// }

// let x = 15;
// if(x%2==0){
//     console.log("x is even");
// }

// let x = 14;
// if(x%2==0){
//     console.log("x is even");
// }

// let x = 22;
// if(x%2==0){
//     console.log("x is even");
// }

// let x = 16;
// if(x%2==0){
//     console.log("x is even");
// }

//! the if-else statement: In computer programming, the if...else statement is a conditional statement that executes 
                    //!   a block of code only when a specific condition is met.

/*
 syntax: 
           declaration
           if(condition){
              
                       code block to be executed

           } else {
                       code block to be executed 
           }



*/



// Write a program that determines whether a given number is positive or negative.

// let num = -12;
// if(num>0){
//     console.log("num is positive");
// } else {
//     console.log("the num is negative");
// }

// let num = 21;
// if(num>0){
//     console.log("num is positive");
// } else {
//     console.log("the num is negative");
// }

// let num = -81;
// if(num > 0){
//     console.log("num is positive");
// } else {
//     console.log("the num is negative");
// }

// let num = 12;
// if(num > 0){
//     console.log("num is positive");
// } else {
//     console.log("num is negative");
// }

// let num = -49;
// if(num > 0){
//     console.log("num is positive");
// } else {
//     console.log("the num is negative");
// }



//! if else if statment: if there are more than one conditions, we use js else if ladder or if else if conditionals

//! syntax:

//       declaration
//       if(condition 1){

//       } else if (condition 2){

//       } else {

//       }


// Write a JavaScript program that checks the temperature and prints a message based on the temperature range:

// If the temperature is below 0°C, print "Freezing cold!"
// If the temperature is between 0°C and 20°C (inclusive), print "Cold!"
// If the temperature is between 21°C and 30°C (inclusive), print "Warm!"
// If the temperature is above 30°C, print "Hot!

// let temp = 17;
// if(temp<0){
//     console.log("Freezing cold");
// } else if(temp>=0 && temp <=20){
//     console.log("cold");
// } else if(temp>=21 && temp <=30){
//     console.log("Warm!");
// } else {
//     console.log("Hot");
// }


// let temp = 31;
// if(temp<0){
//     console.log("Freezing cold");
// } else if(temp>=0 && temp<=20){
//     console.log("Cold");
// } else if(temp>=21 && temp<=30){
//     console.log("warm!");
// } else {
//     console.log("hot");
// }

// let temp = 36;
// if(temp<0){
//     console.log("freezing cold");
// } else if(temp>0 && temp <=20){
//     console.log("cold");
// } else if(temp>=21 && temp<=30){
//     console.log("warm!");
// } else {
//     console.log("hot");
// }

// let temp = 36;
// if(temp<0){
//     console.log("freezing cold");
// } else if(temp>0 && temp <=20){
//     console.log("cold");
// } else if(temp>=21 && temp<=30){
//     console.log("warm!");
// } else {
//     console.log("hot");
// }

// let temp = 36;
// if(temp<0){
//     console.log("freezing cold");
// } else if(temp>0 && temp <=20){
//     console.log("cold");
// } else if(temp>=21 && temp<=30){
//     console.log("warm!");
// } else {
//     console.log("hot");
// }

// nested if else: When we use an if...else statement inside another if...else statement, 
            //     we create a nested if...else statement.




// Write a JavaScript program that checks if a number is positive, negative, or zero. 
//          Then, if the number is positive, further check if it is even or odd.

// let num = 0;
// if(num>0){
//     console.log("num is positive");
//     if(num %2 == 0){
//         console.log("num is even ");
//     } else {
//         console.log("num is odd");
//     } 
// } else if(num<0){
//     console.log("num is negative");
// } else {
//     console.log("the num is zero");
    
// }

// let num = -12;
// if(num>0){
//     console.log("num is positive");
//     if(num%2==0){
//         console.log("num is even");
//     } else {
//         console.log("num is odd");
//     }
// } else if(num<0){
//     console.log("num is negative");
// } else {
//     console.log("num is zero");
    
// }

// let num = 0;
// if(num>0){
//     console.log("num is positive");
//     if(num%2==0){
//         console.log("num is even");
//     } else {
//         console.log("the num is odd;
//     }
// } else if(num<0){
//     console.log('num is negative');
// } else {
//     console.log("num is zero");
// }

// let num = -16;
// if(num>0){
//     console.log("num is positive");
//     if(num%2==0){
//         console.log("num is even");
//     } else {
//         console.log("num is odd");
//     }
// } else if(num<0){
//     console.log("num is negative");
// } else {
//     console.log("num is zero");
// }

// let num = -16;
// if(num>0){
//     console.log("num is positive");
//     if(num%2==0){
//         console.log("num is even");
//     } else {
//         console.log("num is odd");
//     }
// } else if(num<0){
//     console.log("num is negative");
// } else {
//     console.log("num is zero");
// }