console.log("Caculate the factorial");
// let a  = prompt("Enter the number");
let a = 6;
let fac = 1;
// for(let i = a;i>0;i--){
//     fac = fac*i;  
// }
// console.log("The factorial is:" + fac);

// using reduce 
let arr = [];
for (i = 1; i <= a; i++) {
    arr[i - 1] = i;
}
console.log(arr);
const factorial = (ele) => {
    return fac = fac * ele;
}

console.log("The factorial is:" + arr.reduce(factorial));


