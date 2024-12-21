// console.log("Eshwar is a good programmer")
// console.log("harry is a good programmer")


// setTimeout(() => {
    
//     console.log("All can be  a good programmer")
// }, 2000);


// console.log("The end")

const callback = (arg) => {
  console.log(arg)
}

const loadsrc = (src , callb) => {
  let sc = document.createElement("script")
  sc.src = src ;
  sc.onload = callb("harry")
  document.head.append(sc)
}

loadsrc("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)