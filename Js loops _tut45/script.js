console.log("TUtorial 45 loops");


let a = 1 ;
 
for ( let i = 0; i<10; i++){
    console.log(a+i);
}
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
    
// }
console.log("end of loop");

let obj ={
    name:"Eshwar",
    class: 10,
    roll_no :"11",
}


for (const key in obj) {
    let element = obj[key]; 
    console.log(key , element)     
}

for (const c of "Eshwar") {
    console.log(c)
}
