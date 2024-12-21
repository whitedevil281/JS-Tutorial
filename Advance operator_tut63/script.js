async function main() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("Yeaaah 69")
        }, 1000);
    })
}

function sum(a,b,c){
    return a+b+c
}
(async function() {
    // let a = await main()
    // console.log(a);
    
    // let b = await main()
    // console.log(b);

    // let [x,y, ...rest] = [5,2,5,7,8,6,56]
    // console.log(x,y,rest);


    let obj = {
        a:1,
        b:23
    }
    let {a,b} = obj
    console.log(a,b);


    let aa = [5,5,5]
    console.log(sum(aa[0],aa[1],aa[2]))
    console.log(sum(...aa));
        
})()