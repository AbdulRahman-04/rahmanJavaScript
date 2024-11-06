// Type Conversions

/*
The process of converting data of one type to another type

Example : String to Nunber
*/

/*
There are 2 Types of conversions in JS

1.Implicit Conversion
2.Explicit Conversion

 
*/

// Implicit conversions happen automatically when
// JavaScript tries to perform an operation between
//different types, converting values to a common type.

/*
Explicit conversions require functions or methods
 to manually convert types. 
 Common functions are String(), Number(), and Boolean()
 
 

List of DataTypes 

1.String ===> Number,Boolean,null,undefiend
2.Number ===> String ,Boolean,null,undefiend
3.Boolean ===> String,Number,null,undefiend
4.null =====> String,Number,Boolean,undefiend
5.undefined ====>String,Number,Boolean,null

 
*/

// Implicit Conversion

// 1. Any DataType to String (using + operator)

// let marks = 2 + "0";
// console.log(marks, typeof marks);

// let marks = 2 + "8";
// console.log(marks, typeof marks);

// let marks = 3 + "72";
// console.log(marks, typeof marks);

// let marks = 6 + "9";
// console.log(marks , typeof marks);

// let marks = 7 + "6";
// console.log(marks, typeof marks);



// Any DataType to Number (using with  -. / , *)

// let results;
// results = "4" - 2;
// // results = 4 + 5
// results = "4" - 3;
// results = "hello" - "hi";
// results = "5" - "hi";
// results = "5" - true;

// console.log(results, typeof results);

// let results = "45" - true;
// console.log(results, typeof results);

// let result = 65 - "64";
// console.log(result, typeof result);

// let results = true - "0";
// console.log(results, typeof results);

// let result = 4 - '9';
// console.log(result, typeof result);


// Any Datatype to Boolean

// let check;
// check = "5" + true;
// check = "10" - true;

// check = "4" - false;

// // True = 1
// // False = 0

// check = 4 - true;
// console.log(check, typeof check);


// Null to Number
// null = 0

// let test;
// test = 4 - null;
// test = 4 + null;
// console.log(test, typeof test);

// let num = 4 - null;
// console.log(num, typeof num);

// let num = "65" - null;
// console.log(num, typeof num);

// let num = "85" - null - 10;
// console.log(num, typeof num);

// Null to String
// let num = null + " is 0";
// console.log(num, typeof num);

// let num = null + " IS " + " 0";
// console.log(num, typeof num);


// Any DataType to undefined

// let final;

// final = undefined + "Test";
// // final = 5 - undefined;

// console.log(final, typeof final);

// let final = undefined + " can be converted to string but not to number";
// console.log(final, typeof final);

// let final = undefined + " hi";
// console.log(final, typeof final);

// let final = undefined + "  string mai badal gya and uska dt --> ";
// console.log(final, typeof final);

// let final = undefined + " string mai badal gya and uska dt -->";
// console.log(final, typeof final);

// let final = undefined + " string mai badal gya and uska dt -->";
// console.log(final, typeof final);


//undefined to Number
// let num = undefined - 33;
// console.log(num, typeof num);


// let num = undefined - 77;
// console.log(num, typeof num);

// let num = undefined - 49 - "25";
// console.log(num, typeof num);

// let num = undefined - "0";
// console.log(num, typeof num);

// let num = 33 - undefined;
// console.log(num, typeof num);

