

function getrandcolor() {
    let val1 = Math.floor(0 + Math.random() * 255);
    let val2 = Math.floor(0 + Math.random() * 255);
    let val3 = Math.floor(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2},${val3})`
}
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("child was clicked");
})
document.querySelector(".childcontainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childConatiner was clicked");
})
document.querySelector(".conatiner").addEventListener("click", (e) => {
    alert("Conatiner was clicked");
})

// let a = setInterval(() => {
//     document.querySelector(".childcontainer").style.backgroundColor= getrandcolor();
// }, 1000)

// console.log(a)
let a = setTimeout(() => {
    document.querySelector(".childcontainer").style.backgroundColor= getrandcolor();
}, 2000)

console.log(a)