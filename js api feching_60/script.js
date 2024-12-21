const url = "https://cat-fact.herokuapp.com/facts"

let htag = document.querySelector("#heading")
let btn = document.querySelector("#btn")

const getapi = async () => {
  let response = await fetch(url);
  console.log(response); 
  let data = response.json()
  console.log(data);
  r = Math.random()
  ran =Math.floor( 1 + r* (5-1))
  console.log(ran);
  
  let a =   data.then((e) => {
     let c = e[ran].text
     htag.innerText = c
    });
  
}

btn.addEventListener("click", getapi)