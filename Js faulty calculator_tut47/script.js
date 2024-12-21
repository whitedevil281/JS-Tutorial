alert("\t \t  Calculator\n 1. for addition \n 2. for subtraction\n 3. for multiplication\n 4. for division  ");

let ch = prompt("Enter:");
let a = prompt("Enter your first number:");
let b = prompt("Enter your second number:");

let r = Math.random();
console.log(r);
if(r>0.1){
    if(ch == 1){
        let d = a+b;
        console.log("The result is " + d);
    }
    if(ch == 2){
        console.log("The result is " + (a-b));
    }
    if(ch == 3){
        console.log("The result is " + (a*b));
    }
    if(ch == 4){
        console.log("The result is " + (a/b));
    }
    else{
        console.log("Wrong input");
    }
}
else{
    if(ch == 1){
        console.log("The result is " + (a-b));
    }
    if(ch == 2){
        console.log("The result is " + (a/b));
    }
    if(ch == 3){
        console.log("The result is " + (a+b));
    }
    if(ch == 4){
        console.log("The result is " + (a**b));
    }
    else{
        console.log("Wrong input");
    }
}

