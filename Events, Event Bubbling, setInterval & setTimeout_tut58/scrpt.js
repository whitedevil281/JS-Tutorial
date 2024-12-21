let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    // alert("Button was clicked")
    document.querySelector(".box").textContent ="Yaaayyy i was clicked"
})
document.addEventListener("keydown",(e)=>{
    // alert("Button was clicked")
    console.log(e);
    // document.querySelector(".box").textContent ="Yaaayyy i was clicked"
})