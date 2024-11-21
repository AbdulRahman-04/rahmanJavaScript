/* promises:  in js, promises  are a powerful way to handle asynchronous operations. 
they represent a value that may be available now or in future or never. promises 
help manage async code more effectively than traditional callbacks , avoiding "callback hell";

How Promises work?

a Promise is an object with three possible states:

a promise is an object with three possible states

PENDING: this operation is ongoing and has not yet completed

FULFILLED: the operation completed successfully and the promise  has a value

REJECTED: the operation failed, and the promise had a reason or error

*/

// function oddEven(number){
//     return new Promise((resolve, reject) => {
//         if(number%2==0){
//             resolve(`${number} is even`)
//         } else {
//             reject(`${number} is odd`)
//         }
//     });
// }

// oddEven(8)
// .then((message) => {
//     console.log("Success", message);
// }) 
// .catch((error) => {
//     console.log("Error: ", error); 
// });


// function verifyAge(age){
//     return new Promise((resolve, reject) => {
//         if(age>=18){
//             resolve("You are eligible to vote");
            
//         } else {
//             reject("You're not eligible to");
            
//         }
//     })
// }

// verifyAge(21)
// .then((message) => console.log("Success", message))
// .catch((error) => console.log("error", error))



// function age(Age){
//     if(Age>=18){
//         console.log("vote");
//     } else {
//         console.log("not eligible");
        
//     }
// }
// age(10);

// function checkStock(product){
//     return new Promise ((resolve, reject) => {
//         console.log(`checking for ${product}`);
//         setTimeout(() => {
//             if(product === "Laptop"){
//                 resolve(`${product} is avaialable`)
//             } else {
//                 reject(`${product} is out of stock` )
//             }
//         }, 2000)
//     })
// };


// checkStock("mobile")
// .then((message) => console.log("Success", message))
// .catch((error) => console.log("Error", error))

function checkStock(product){
    return new Promise ((resolve, reject) =>{
        console.log("checking for ", product);
        setTimeout(() => {
            if(product === "Laptop"){
                resolve(product , "is available")
            } else {
                reject(product ,"isn't avaialable")
            }
        }, 2000)

    })
}

function checkWareHouse(product) {
    return new Promise((resolve, reject) => {
        console.log("checking warehouse for ", product);
        setTimeout(() => {
            const warehouse = true;
            if(warehouse){
                resolve(product ,"is available")
            } else {
                reject(product , "isn't available")
            }
        }, 1500)
        
    })
}


function checkAvailibility(product){
    return new Promise((resolve, reject) => {
        console.log("check availibility of ", product);
        setTimeout(() => {
            const locallyAvailable = true;
            if(locallyAvailable){
                resolve(product ,"is available at local stores" )
            } else {
                reject(product , "isn't availlable locally")
            }
        }, 1000);
    })
}


function shipToStore(product){
    return new Promise((resolve, reject) => {
        console.log(`shipping ${product} to the store`);
        setTimeout(() => {
            const shipStore = true;
            if(shipStore){
                resolve(`${product} shifted to store`)
            } else {
                reject(`${product} is not shifted to store`)
            }
        }, 2000)
    })
}


checkStock("Laptop")
.then((message) => {
    console.log("Success:", message);
    return checkWareHouse("Laptop")
})
.then((message)=> {
    console.log("Success", message);
    return checkAvailibility("laptop")
})
.then((message) => {
    console.log("Success", message);
    return shipToStore("Laptop")
})
.then((message)=> {
    console.log("Success", message);
    console.log("Process complete: your product is ready for pickup");
})
.catch((error) => {
    console.log("Error", error);
    console.log("process terminated: unable to proceed further");
    
})