// JS epoch time: 

/* epoch time represents the number of milliseconds that have elapsed since january 1 1970, 00:00:00 UTC, 
commonly referred to as the unix epoch. 

js uses milliseconds to represent epoch time

Getting the current epoch time: 
js provides multiple ways to get the current epoch time.

there are ways of creating a date:
1. new Date()
2. new Date(milliseconds)
3. new Date(date in string)
4. new Date(year, month, day, hour, minute, seconds, milliseconds)

*/

let date = new Date();
console.log(date);

let date1 = new Date(1731994564702);
console.log(date1);

let date2 = new Date("11 may 2016");
console.log(date2);

let date4 = new Date(2017, 10, 20, 11, 50, 50, 50);
console.log(date4);


// converting date into MilliSeconds:

let c = Date.parse(new Date());
console.log(c);

let d = Date.parse(new Date());
console.log(d);


// or 

let j = Date.parse('sat feb 11 2023 11:20:23 GMT+0000(coordinated universal time');
console.log(j);


// converting to Any standard time zone

let indDate = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata",});
console.log(indDate);
// OR

let date5 = new Date().toLocaleString("en-US", {

    timeZone: "Asia/Kolkata",
    month:"numeric",
    day: "2-digit",
    year:"numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "numeric",
    second: "2-digit",
    dayPeriod: "long"
     

} )

console.log(date5);






let date6 = new Date().toLocaleString("en-US", {

    timeZone: "Asia/Kolkata",
    month:"numeric",
    day: "numeric",
    year:"2-digit",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    second: "numeric",
    dayPeriod: "short"
     

} )

console.log(date6);
