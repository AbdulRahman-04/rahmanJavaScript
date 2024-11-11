Recursion and hoisting:

// recursion:

// Recursion is a process in which a function calls itself directly or indirectly in order
// to solve a problem by breaking it down into smaller, sub similar problems. this repeated 
// self-calling continues until it reaches a base case, which is a condition where no further
// recursion is needed, allowing the function to start  returning values back up through each 
// call. in simple terms recursion is when something is defined or done in terms of itself 
// until it reaches a stopping point.


// the below function is an example of function recursion
// let sayHello = () => {
//     console.log("hello");
//     sayHello()
// }

// sayHello()

// function call(num){
//  if(num<1){
//           console.log("recursion ends here");
//           }

// console.log(num);
// call(num-1)
// }

// call(10)


// function myName(name){
//  console.log(name);
//  myName(name);
 
// }
// myName("Rahman")

// function subNum(num){
//   if(num<=1){
//     console.log("the recursion inishes here");
//   }
//   console.log(num);
  
//   subNum(--num)
// }
// subNum(15)