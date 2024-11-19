//Destructuring :  Object and array destructuring in js is a concise and elegant way to extract values from
//                 arraya and objects into individual variables. it was introduced in ES6 and is widely used
//                 for cleaner, more readable code.

let person = {
  fname: "Suhail",
  lname: "Bhai",
  age: 26,
  isAlive: true,
};

// console.log(person.fname, person.age);

// old way to store key values in a new variable
// let fname = person.fname;
// let lname = person.lname;
// let age = person.age;
// console.log(fname);
// console.log(lname);
// console.log(age);

// object destructuring:

// you have to give the same name of key in object destructuring {}
let { fname, lname, age, isAlive } = person;
// console.log(fname);
// console.log(lname);
// console.log(age);
// console.log(isAlive);

// Array destructuring:

let myArr = ["rahman", true, "suhail bhai", "nasir"];

// old method to store index values in a new elements
// let firstValue = myArr[0];
// let secondValue = myArr[1];
// let thirdValue = myArr[2];
// console.log(firstValue, secondValue, thirdValue);



// Array Destructuring:
let [zeroValue, firstValue, secondValue, thirdValue] = myArr;
console.log(zeroValue, firstValue, secondValue);

try {
  let newArr = [12, "rahman", true, undefined];
  let [value0, value1, value2, value3, value4] = newArr;
  console.log(value0, value1, value2, value3);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}


try {
     let arr = [ "Suhail", "Ali", 10, true, false, "40"];
     let [first, second, third, fifth ] = arr;
     console.log(first, second, third, fifth);
     


} catch (error) {

    console.log(error.name);
    console.log(error.message);
    
    
}

