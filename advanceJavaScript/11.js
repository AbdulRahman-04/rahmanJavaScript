/* Call backs: In JavaScript a call back function that is passed as an argument to another function and is 
executed after some operation is completed. callbacks are a key concept in js and are often used for handling
asynchronous operations like API calls, file reading or event handling 



Async code:
1.setTimeout and setInterval
2.Http request
3.promises
4.file system

these async code works independently and executes later after sync code gets executed
*/

// A function calling itself inside in its own code block is called recursion while a different function is
// is called inside another function using a parameter is called call back() and the bunch of call back s
// statements are called callback hell()

// function attendCfi (callback){
//     console.log("attending cfi");
//     callback();
// }
// function goBoradRoom(callback){
//     console.log("go board room");
//     callback();
// }
// function sitOnBench(callback){
//     console.log("listen to lecture");
//     callback();
// }
// function sleep(){
//     console.log("sojao");
    
// }


// this is also called as callback Hell!
// attendCfi(() => {
//     goBoradRoom(() => {
//         sitOnBench(() => {
//             sleep();
//         })
//     })
// })


// function sayHi(callback){

//     console.log("hi");
//     callback();
    
// }
// function sayBye(callback){
//     console.log("bye");
//     callback()
    
// }
// function addNum(n1, n2, callback){
//     console.log(n1 + n2);
//     callback();
    
// }
// function getOut(){
//     console.log("out!");
    
// }

// sayHi(() => {
//     sayBye(()=> {
//         addNum(4,2, () => {
//             getOut()
//         })
//     })
// })



function callKro(callback){
    console.log("call krr bhai");
    callback();
}
function kidhrHai(callback){
    console.log("kidhr hai bhai?");
    callback();
}
function aanaTha(callback){
    console.log("Aana tha bhai ghr pe");
    callback();
}
function okBye(){
    console.log("bye");
    
}

callKro(() => {
    kidhrHai(() => {
        aanaTha(()=> {
            okBye()
        })
    })
})

function student1(callback){
    console.log("rahman");
    callback();
}
function student2(callback){
    console.log("mz");
    callback()
}
function student3(callback){
    console.log("ib");
    callback()
}
function student4(){
    console.log("sf");
    
}
student1(() => {
    student2(() => {
        student3(() => {
            student4();
        })
    })
})

function l1(callback){

    callback()
}
function l2(callback){

    callback()
}
function l3(callback){

    callback()
}
function l4(callback){

    callback()
}
function l5(){
    console.log("hey");
    
}
l1 (() => {
    l2(() => { 
        l3(() => {
            l4(() => {              //this is callback hell.
                l5()
            })
        })
    })
})