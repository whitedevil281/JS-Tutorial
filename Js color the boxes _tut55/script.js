console.log("Color the boxes");
// let box = document.querySelector(".container").children;
let bb = [...document.getElementsByClassName("box")]

function getrandcolor(){
    let val1 = Math.floor(0 + Math.random()*255);
    let val2 = Math.floor(0 + Math.random()*255);
    let val3 = Math.floor(0 + Math.random()*255);
    return `rgb(${val1}, ${val2},${val3})`
}

console.log(bb[0])


