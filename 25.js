// Object methods:


// common built in object methods
// js provides several built in object methods, available through the global object


let person = {
    fname: "syed",
    age: 20,
    isAlive: true
}
// console.log(person);



// 1. Object.keys(obj):
// it returns an array of keys (property names) in the object

// console.log(Object.keys(person));
// console.log(Object.keys(person));
// console.log(Object.keys(person));
// console.log(Object.keys(person));
// console.log(Object.keys(person));






// 2. Object.values(obj):
//  it returns an array of values in the object

// console.log(Object.values(person));
// console.log(Object.values(person))
// console.log(Object.values(person))
// console.log(Object.values(person));
// console.log(Object.values(person));
// console.log(Object.values(person));


// 3. Object.entries(objectname):
// returns an array of object

// console.log(Object.entries(person));
// console.log(Object.entries(person));
// console.log(Object.entries(person));
// console.log(Object.entries(person));
// console.log(Object.entries(person));
// console.log(Object.entries(person));
// console.log(Object.entries(person));


// 4. Object.assign(objname):
// this returns an object which clones/merges one object into another.

let obj1 = {
    a: 12,
    b: 13,
}

let obj2 = {
    c: 18
}

// console.log(Object.assign(obj2, obj1));
// console.log(Object.assign(obj1, obj2));
// console.log(Object.assign(obj2, obj1));
// console.log(Object.assign(obj1, obj2));
// console.log(Object.assign(obj2, obj1));


// 5. Object.create(objname)
// it is a method which allows us to create a new object with a specified prototype object 
// and optional additional properies. this is particularly useful when you want to establish 
// prototype-based inheritance, allowing one object to inherit properties and methods from another


// let myDetails = {
//     name: "rahman",
//     rollNo: 49,
//     age: 20
// }

// let myBio = Object.create(myDetails);
// console.log(myBio.name, myBio.rollNo, myBio.age);


// let studentDetails = {
//     fname: "mz",
//     lname: "ab",
//     location: "hyderabad",
//     courseEnrolled: "CFI- FULL STACK"
// }

// let cloneStudentDetails = Object.create(studentDetails);
// console.log(cloneStudentDetails.fname, cloneStudentDetails.lname, cloneStudentDetails.location, cloneStudentDetails.courseEnrolled);



// let bioData = {
//     fullName : "Syed Abdul Rahman",
//     course: "Cfi-Full-Stack",
//     rollNo: 160321735049,
// }

// let copyBioData = Object.create(bioData);
// console.log(copyBioData.fullName, copyBioData.rollNo);


// let c24 = {
//     student1: {
//         name: "rahman",
//         marks: 92
//     },
//     student2: {
//         name: "saad",
//         marks: 95
//     },
// }

// let copyC24 = Object.create(c24);
// console.log(copyC24.student1);
// console.log(copyC24.student2);


// 6. Object.freeze(objname)
// in js object.freeze will freeze your key, value pair or whole object .


// let mall = {
//     area: "Bahadurpura",
//     location: "Hyderabad"
// }

// mall.contactNo = "8186978069",
// console.log(mall);

// console.log(Object.freeze(mall));

// mall.area = "kishanbagh",
// mall.location = "bengaluru"
// console.log(mall);


let company = {
    area: "hi-tech city",
    location: "Hyderabad"
}

// company.isRegistered = true;
console.log(company);


console.log(Object.freeze(company));


// company.vistingHours = 9 + " to " + 5;
// console.log(company);


//  7. Object.fromentries()
// it takes an input from an array and converts it into an object. reverse of object.entries

// let ab = [["ab", "49"], ["ece","yy"] ];
// console.log(Object.fromEntries(ab));

// let myClass = [["rollno1", "ab"],["rollNo2", "mz"],["rollNo3", "sneha"]]
// console.log(Object.fromEntries(myClass));

// let mall = [["ab", 0],["sn", 1],["mz", 2],["ismail", 4]]
// console.log(Object.fromEntries(mall));


// let myLecturer = [["suhail bhai", 10], ["ahmed sir", 10], ["fawaz sir", 10],["adnan sir", 10]]
// console.log(Object.fromEntries(myLecturer));



// 8. Object.is(objname)
// in js Object.is checks if two values are same values or not just like (===)

// let a = "10";
// let b = "10";
// console.log(Object.is(a,b));

// let a = "Hies";
// let b = "Hies";
// console.log(Object.is(a,b));

// let c = 89;
// let d = 89;
// console.log(Object.is(c,d));

// let ab = "maxim";
// let rah = "maxim";
// console.log(Object.is(ab,rah));



// 11. Objext.seal(objname):
// in js, you can update the key, value pairs in object using Object.seal but can't update 
// any changes to trhe object

// let hello = {
//     fname : "hey",
//     age:30
// }

// let mall  = {
//     area: "gacchibowli",
//     location: "hyderabad"
// }

// console.log(Object.seal(mall));
// mall.branch = "karwan road";
// console.log(mall);

// mall.area = "Gacchibowli, New City";
// console.log(mall);


// let myCfiMates = {
//     name1: "ab",
//     name2: "mz",
//     name3: "sn"
// }
// console.log(myCfiMates);

// console.log(Object.seal(myCfiMates));
// myCfiMates.name1 = "abdul";
// myCfiMates.name2 = "muzammil";
// myCfiMates.name3 = "sneha";
// console.log(myCfiMates);

// 10. Object.toString()
// toString() converts the number into binary, octal and hexa values only

// let number = 64;
// let check = number.toString(16);
// console.log(check);

// function conversion(number, convert){
    
//     return console.log(number.toString(convert));
    
// }
// conversion(12, 2);

// console.log(new Date()); 
// this gives current date and time in ISO 8601 format example given below:
// 2024-11-08T05:01:32.215Z
// YYYY-MM-DD T HH:mm:ss.sssz

// console.log(new Date().toString());

// let num1 = 10101;
// let num2 = num1.toString(16)
// console.log(num2);

// let n1 = 166;
// let n2 = n1.toString(16);
// console.log(n2);

// let number1 = 18683622;
// let number2 = number1.toString(8);
// console.log(number2);


// let binNum = 101010101111000;
// let hexNum = binNum.toString(16);
// console.log(hexNum);

// let binToOctal = (number, convertTo) =>{
//     console.log(number.toString(convertTo));
    
// }
// binToOctal(2453,  16);


// let numConversion = function(number, ConvertedNum) {
//   console.log(number.toString(ConvertedNum));
  
// }
// numConversion(123, 2)


// Object.isSealed(): 
// this object method checks if an object is sealed or not

// let myAadhar = {
//     name: "rahman",
//     fatherName: "Khaled",
//     DOB: -"01 05 2005",
// }

// console.log(Object.seal(myAadhar));

// console.log(Object.isSealed(myAadhar));


// object.isFrozen():
// this object method checks if an object is frozen or not

// let mall = {
//     area: "hitech city",
//     location: "hyderabad"
// }
// console.log(Object.freeze(mall));
// console.log(Object.isFrozen(mall));