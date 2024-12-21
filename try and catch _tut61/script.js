let a = prompt("Enter first number")
let b = prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry string value are not allowed")
}



// console.log("the sum is : " + (parseInt(a)+parseInt(b)));
let x = 1
let sum = a+b
function main(){
    try {
       return  console.log(sum*x);
        
    } catch (error) {

       return console.log("Errooooorrrr");
    }
    finally{
        console.log("Yeaaaaaaaaaaaaahhhhhhhhhhhhhhhh");   
    }
}

main()
