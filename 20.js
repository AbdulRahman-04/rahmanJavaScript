// Functions: it is a block of code which performs specific task

// there are two types of functions
// 1. Built in function
// 2. user defined functions


// -->user defined functions
   
// Declaring a Functions

// syntax:

// function  nameOfFucntion()
// {
// }

// //calling the function
// nameOfFunction()


// Important points of functions
// 1. A function is declared using the function keyword
// 2. Always use camelcase while declaring function name
// 3. the body of function is written in code block{}
// 4. functions are reusable
// 5. functions are the fundamentals block of javascript
// 6.functions is a group of code designed to perform specific task
// 7.javascript functions can be called anywhere in your program


// types of user defined functions
// 1. Simple Functions
// 2. Function parameters
// 3. Function with return
// 4. Function Expression
// 5. Arrow Function
// 6.Anonymus Function
// 7.iife


// Simple functions: 

// Def:it is a basic function that performs actions and doesn't return a value
// e.g: 
// function greet(){
// console.log("hello world")
// }  

// greet(); -->output: hello world


// below are some examples of simple functions :

// function abdulRahman(){
//     console.log("hello");
// }

// abdul()

// function course(){
//     console.log("cfi full stack");
// }

// course()
// course()
// course()
// course()

// function syedBhai(){
//     let i = 1;
//     for(i; i<=10; i++){
//         console.log(i);
//     }
// }

// syedBhai()
// syedBhai()

// function cfi(){
//     let i = 25;
//     if(i<=15){
//         console.log("its less than 15"); 
//     } else {
//         console.log("its greater than 15");
//     }
// }

// cfi()

// function sayHello(){
//     console.log("hello");
// }
// sayHello();


//   2. Function with parameters and arguements: in this type of function,
//   --> you pass parameters to the function, which are used within the function
//   --> the function performs an action but it doesn't give anything back when its done.
//   --> without a return statement, the function will implicitly return the undefined.

// function sayHi(lastName){
//     console.log(hi ${lastName});
// }

// sayHi("Rahman");

// below are some examples of functions with parameters:

// function sayHi(lastName){
//     console.log(hi ${lastName});
// }

// sayHi("Rahman");

// function sayMyName(myName){
//      console.log(hi, ${myName});
     
// }
// sayMyName("Rahman")

// function sumOfNum(num1, num2){
//      console.log(sum of num1 and num2 is = ${num1 + num2});
     
// }
// sumOfNum(2,3)

// function subValue(number1, number2){
//  console.log(subtraction of ${number1} & ${number2} is = ${number1 - number2});
 
// }
// subValue(8,5)

// function divValue(n1, n2){
//   console.log(${n1/n2});
// }
// divValue(12,2)

// function numMul(a,b){
//  console.log(a*b);
// }
// numMul(3,5)


// 3. Function with Return: 


// function value(a,b){
//    return a+b;
// }

// let result = value(3,3);
// console.log(result);

// function varname(fname , lname){
//     return fname + lname
// }

// let myNames = varname("syed" , "rahman");
// console.log(myNames);

// let nameIs = varname("abdul", "bhai");
// console.log(nameIs);

// function sumNum(num1 , num2){
//     return  num1+num2
// }

// let totalSum = sumNum(5,5);
// console.log(totalSum);

// function courseIs(year, course){
//  return year + " " + course
// }
// let myEngineering = courseIs(-"4", "ECE");
// console.log(myEngineering);

// function returnKar(a,b,c){
//     return a*b/c
// }

// let totalResult = returnKar(2, 3 ,6)
// console.log(totalResult);

// function sayHello(myMessage){
//     return myMessage;
// }

// let greet = sayHello("hello ji");
// console.log(greet);

//  return: if you need to get a value back from the function, use return. this lets the function provide 
//  a specific result that can be saved or used.

// no return: if you just want the function to do something(like log or alert) and dont need a result, dont 
//  use return.



// Function Expression: in js functions can be defined as expressions


// syntax: 

// let sayHello = function(){
//     console.log("hello");
// }
// sayHello();

// let myName = function(){
//     console.log("hey");
// }
// myName();

// let myFunction = function(a,b){
//   return a +b;
// }
// let myResult = myFunction(2,4);
// console.log(myResult);

// let myClass = function(){
//     console.log("CFI C24");
// } 
// myClass()

// let age = function(){
//     console.log(22);
// }
// age();

// let collegeName = function(){
//     console.log("DCET");
// }
// collegeName();

// let myFriends = function(){
//     console.log("sneha", "MZ", "ismail", "saad", "meraj", "omer", "samid");
// }
// myFriends();

// let myExpression = function(){
//     console.log("hi");
// }
// myExpression()

// let address = function(){
//     console.log("bahadurpura");
// }
// address()

// ARROW Functions: 
// --> it was introduced in es6 
// --> arrow functions allow us to write shorter function syntax


/* 
  Before arrow functions
  function sayhello(){
    console.log("hey")
  }
  
  sayhello()
  

  let sayHello() = function(){
   console.log("hello")
  }
   sayHello();
   */


   //    Arrow Functions:
 
// let sayHello = () => 
// {
//   console.log("heyy")    
// }

// sayHello()
// // arrow functions are declared just like function expression but removes function keyword and just write ()
// and add "=>" next to () and write the code block in {}

// if your code block is just of one line then just write it without curly braces. e.g:

// let sumNumbers = (a, b) => a+b;
// console.log((2,3));

// function sumNum(c,d) {
//     return c+d;
// }
// sumNum(2,4);
// console.log(sumNum(2,4));


// this is single line arrow function
// let sayHello = () => console.log("hie");
// sayHello()

// let myAge = () => {
//     console.log(22);
// }
// myAge()

// let myCourse = () => {
//     console.log("Full stack web devolopment");
// }
// myCourse();

// let sayBye = () => {
    // console.log("bye");
// }
// sayBye();


// simple function ka syntax with an example :
/*
  function functionname(){
                        code block
  }
       functioname()                 
*/
// function myName(){
//     console.log("rahman");
// }
// myName()


// function with parameters 

// function sumNum(a,b){
//   console.log(a+b);
// }
// sumNum(1,2)

// function with return:

// function subNum(a,b){
//   return a-b;
// }

// let totalSubValue = subNum(5,3);
// console.log(totalSubValue);

// function expression:

// let myCourse = function(){
//   console.log("i'm enrolled in cfi full stack");
// }
// myCourse()

// arrow functions:

// let myRollNo = () =>{
//     console.log(+"160321735049");
// }
// myRollNo()