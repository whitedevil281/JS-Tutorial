console.log("sKLECTING BY CLASS IDS")

// let box = document.getElementsByClassName("box");
// console.log(box);

// box[1].style.backgroundColor = "green"
// box[2].style.backgroundColor = "red"
// document.getElementById("boxx").style.backgroundColor = "blue"


// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))


document.querySelectorAll(".box").forEach(e=>{
    console.log(e)
    e.style.backgroundColor = "green"
}
)