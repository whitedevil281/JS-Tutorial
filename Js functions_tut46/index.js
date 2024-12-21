// console.log("Eshwar is a good boy ");
// console.log("Eshwar is a good coder");
// console.log("Eshwar ia a good student ");
// console.log("Eshwar is a good human");


function intro(name) {
    console.log(name + " is a good boy ");
    console.log(name + " is a good coder");
    console.log(name + " ia a good student ");
    console.log(name + " is a good human");
}

// intro("Harry");

function sum(a, b) {
    // console.log(a+b);
    return a + b;
}

result = sum(2, 3);
console.log("The result of the sum is :" + result);

const func1 = (x, a, c, d) => {
    console.log("THis is a a functions", x, a, c, d)
}

func1(45, 2, 3);
function logNumbers(num1, num2) {
    console.log(arguments)
}

logNumbers(8, 24)


const logNumbers2 = (num1, num2) => {
    console.log(arguments)
}

logNumbers(8, 24) 
//   To access the arguments passed to an arrow function, you can also use the rest parameter syntax (...).

// Example:

logNumbers = (...args) => {
    console.log(args)
  }
  
  logNumbers(8, 24)