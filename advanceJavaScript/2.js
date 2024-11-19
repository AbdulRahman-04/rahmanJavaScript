// create a function to calculate the area of rectangle

// function areaOfRectangle(length, breadth) {
//   try {
//     console.log("Area of rectangle = ", length * breadth);
//   } catch (error) {
//     console.log("error name:" ,error.name);
//     console.log("error message:",error.message);
//   }
// }
// areaOfRectangle(12, 13);

let areaOfTriangle = (base, height) => {
  try {
    console.log("Area of triangle: ", (1 / 2) * base * height);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};
areaOfTriangle(12, 15);

// create a function to add and subtrreact two numbers:

let arithmeticNum = (num1, num2) => {
  try {
    let total1 = num1 + num2;
    let total2 = num1 - num2;
    console.log(total1);
    console.log(total2);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};
arithmeticNum(13, 11)
