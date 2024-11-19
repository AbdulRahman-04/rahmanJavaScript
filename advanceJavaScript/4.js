// for in and for of loop:
/*

 the for in and for of loops in js are used for iterating, but they have different purposes and work differently 
 with arrays and objects. understanding when and how to use each is crucial for effective iteration.

 for of: used by arrays and strings
 
 for in: used by objects

*/


// for of: 
// purpose: iteratable over arrays and strings

// syntax: 


const array = [10, 20, 30];
for( let i of array){
    console.log(i);
    
}

for(let m in array){
    console.log(m);
    
}

const str = "heyy";
for(let char of str){
    console.log(char);
    
}


// for in : this for loop is used in objects only.

let obj = {
    fname: "syed",
    lname: "rahman",
    isAlive: true,
    age: 20
}

// this for in loop only prints object keys only in output
for(let k in obj){
    console.log(k);
    
}


// to print values of keys too of an object

for(let j in obj){
    console.log(j, obj[j]);
    
}

let obj2 = { 
    class : 4,
    year: 3,
    course: "ECE",
    profile: "Full Stack web Dev"
}
for(let b in obj2){
    console.log(b , obj2[b]);
    
}