// // Hoisting:

/*
 in Javscript, hoisting is a mechanism where variable and function declarations are moved 
 (or hoisted) to the top of their scope before code execution. this means that you can use
 variables and fucntions before declaring them in the code. However, its essential to note 
 that only declarations are hoisted not initializations or assignments.
 
 --> function declarations are fully hoisted, meaning you can call the function before its
     declared.
 --> we use simple functions to use its hoisting property which means we can call it 
     wherever we want in the file, even before the function but this is not the case with
     arrow functions, because we use let in it, we can only call it after writing the function
  
     e.g:

      test();
     let test = () => {
        console.log("hello");
     }

 */


// you cannot use hoisting when a function is declared using arrow or function expression
// which means calling the function  even before writing a function.

// sayMyName()
// function sayMyName(){
//     console.log("abdul");
// }
// sayMyName()

// myAge();
// function myAge(){
//     console.log(22);
// }
// myAge()

// myCourse()
// function myCourse(){
//     console.log("cfi full stack");
    
// }
// myCourse()

// myFriends()
// function myFriends(){
//     console.log("mz, sneha, samid, ismail, meraj, saad, omer");
// }
// myFriends()

// myCollege()
// function myCollege(){
//     console.log("dcet");
// }
// myCollege()



/*
 Anonymus Function: an anonymus function in js is a function thats does not have a name.
 its often used when you need a function as a vlue, particularly in cases where you dont
 need to reference the function later.

 anonymus functions are type of function expression and arrow function but withoput function
 name.

 these are useful for single use functions or for functions passed as arguements

 syntax:

 let sayHello = function() {
 console.log("hello")
 }
 sayHello();
 /

// IIFE(immediately invoked Function Expression)

syntax:

(function(){
    console.log("hello");
    
}) ();

*/

// (function myName(name){
//     console.log("hey");
    
// } myname("rahman"))