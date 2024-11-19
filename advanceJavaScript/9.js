// DATE AND TIME IN JAVASCRIPT:

// js provides a built in date object to handle date and time operations

// 1.Creating a date object:

let currentTime = new Date();  //UTC  time zone
// the output date would be in form of ISO  8601
console.log(currentTime);

let pastTime = new Date();
console.log(pastTime);

/*

2024-11-19T04:40::19.162z means:
the date is nov 19, 2024 & the time is 04: 40: 19 and 162 milliseconds.

*/


// Date Methods: 

const date = new Date();
console.log(date);


console.log(date.getFullYear());    //year 2024
console.log(date.getMonth())        // month(0-current)
console.log(date.getDate());        // Day of the month (today is 19)
console.log(date.getDay());         // Day of the week (0 - sunday)
console.log(date.getHours());       //hour
console.log(date.getMinutes());      // Minutes
console.log(date.getSeconds());     //Seconds
console.log(date.toISOString());    //ISO  8601 string
