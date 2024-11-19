// try, catch block :

/*
 the try catch statement in es6 js is used for handling exceptions or errors in code execution.
 it allows you to gracefully handle errors without crashing the entire application.


*/

// try{

//     console.log("hey");

// } catch(error){

//     console.error(error)
// }

try {
  let obj = {
    name: "suhail bhaii"
  }
  console.log(obj.name); //accessing a property of undefined
} catch (error) {
  console.error(error);
  console.error(error.name);
  console.log("error name: ", error.name);
  console.log("error messsage: ", error.message);
}


function test(pass){

    try {
        let obj = {
            // name: pass
        }
        console.g(obj.name);
        
    } catch (error) {
        // console.log(error.name);        // isse output mai error ka naam aata
        // console.log(error.message);     // isse error mai message kya hai wo aata
        
        console.log(error);
        
    }
}
test("suhail bhai")