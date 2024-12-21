let doublearr = (a) => {
  for (let i = 0; i < a.length; i++) {
    let e = a[i];
    if (e === a[i+1]){
      i++
      a.push(e)
      continue
    }
    // a.push(e)
  }
  console.log(a);
}

doublearr([1, 1, 2, 3,4, 5])