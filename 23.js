// Objects:

/*
  in javascript, Objects are kings.
  if you understand objects then you have understood javascript.

  in javascript everything is almost Object
  in Javascript, objects are collections of key value pairs that represent real world entities or
  complex data structures.

  they are one of the core data structures in javascript and are used extensively in both frontend 
  and backend devolopment.

*/

// basic objects syntax:

let mydetails = {

     fname: "syed",
     lname: "rahman",
     college: "dcet", 
     course: "ece",
     rollNo: 160321735049,
     isPass:true 
}

// console.log(mydetails);
// reading key values elements in objects
// console.log(mydetails.fname);
// console.log(mydetails.lname);
// console.log(mydetails.course, mydetails.rollNo);
// console.log(mydetails.rollNo);



// updating values in an object
mydetails.fname = "abdul";
console.log(mydetails.fname);
// console.log(mydetails);
mydetails.lname = "rahman hussain";
// console.log(mydetails);
mydetails.rollNo = 201932626;
// console.log(mydetails.rollNo);
mydetails.course = "CFI Full stack dev"
// console.log(mydetails.course);


// deleting elements inside an object:
delete mydetails.college;
// console.log(mydetails);
delete mydetails.rollNo;
// console.log(mydetails);
delete mydetails.isPass;
console.log(mydetails);

// accessing or updating the key value elements in nested object:
// nested object:

let studentdetails = {
    fname: "Syed",
    lname:"Abdul Rahman",
    address: {
        location: "Hyderabad",
        street: "Chadulal baadari",
        houseNo: 18-7-212,
        paymentMethods: {
            payment1: "Cash",
            payment2: "Googepay",
            payment3: "phonePe"
        }
    }
}

// deleting the payment3 in the above object:

delete studentdetails.address.paymentMethods.payment3;
// console.log(studentdetails.address.paymentMethods);

// updating payment2 in above object
studentdetails.address.paymentMethods.payment2 = "Cash"
// console.log(studentdetails.address.paymentMethods);
// [13:44, 10/11/2024] 