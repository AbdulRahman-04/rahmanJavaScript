// Destructuring assignments

/*

 object and array destructuring in javascript allow you to extract values from objects and arrays 
 in a concise way. this feature is useful when you want to pull values from complex structures
 and assign them to variables quickly


*/

let person = {
    fname: "syed", 
    lname: "rahman",
    age: 20,
    isAlive: true
}

// let fname = person.fname;
// let lname = person.lname;
// let age = person.age;
// let isAlive = person.isAlive;

// this is object destructuring..
let {fname, lname, age, isAlive, isFalse} = person;
console.log(fname, lname, age, isAlive, isFalse) ;


let mall = {
    area: "hitech city",
    location: "hyd",
    pincode: 500064
}

// let {pincode, area, location} = mall;
// console.log(area, location, pincode);



// Array destructuring: 

let color = ["red", "green", "blue"];
let [firstcolor, secondcolor, thirdcolor] = color;
// console.log(firstcolor);
// console.log(secondcolor);
// console.log(thirdcolor);



let fruits = ["apple", "banana", "grapes" ];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);



