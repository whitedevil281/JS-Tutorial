console.log("\t\tBussiness name generator");

let adj ={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let sname ={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let words ={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
let ran = Math.random();

let rand1 = Math.floor(Math.random() *3)+1;
 let rand2 = Math.floor(Math.random() * 3) + 1;
let rand3 = Math.floor(Math.random() * 3) + 1;
let a = adj[rand1];
let b = sname[rand2];
let c = words[rand3];

    console.log(`Name: ${a}  ${b}  ${c}`)

