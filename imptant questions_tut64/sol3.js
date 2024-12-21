let rev  = ""
let stringrev = (e) => {
  for(let i= e.length;i >=0 ; i--){
    let rev = e;
    rev[i] = e[i]
  }
  console.log(rev);
  
}
stringrev("Eshwar")