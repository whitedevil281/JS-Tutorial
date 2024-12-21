function data(data) {
    return new Promise((resolve, reject) => {
        console.log("Feching data" + data);
        // setTimeout(() => {
        //     console.log(data);

        //     resolve("sucesss")
        // }, 2000);
        console.log(data);
        resolve("sucesss")
        
    }
    )
}
// promisu.then("harrry")
// data(1).then("yeahhhhhhhhh")

// console.log(Promise);

// data.then("yeaaaaahhhh")
// data(1)
let promisu = data(1)
// promisu.then( () => {
//     data(2).then(
//         (e) => {
//          data(3) 
//          console.log(e);

//         }   
//     )      
// }
// )

console.log(promisu);



// function asyncdata(data) {
//     return new Promise((resolve, reject) => {
//         console.log("Feching data" + data);
//         setTimeout(() => {
//             reject("rehjjjjetion hahahahahah")
//             console.log(data);

//             // resolve("sucesss")
//         }, 2000);
//     }
//     )
// }
// let a = asyncdata(1)
// a.then(() => {
// })

// a.catch(() => {
//     console.log("ldnjbdfjgbfjdgjdb ")
// }   
// )


// function asyncdata(data) {
//     return new Promise((resolve, reject) => {
//         console.log("Feching data" + data);
//         setTimeout(() => {
//             resolve("rehjjjjetion hahahahahah")
//             console.log(data);

//             // resolve("sucesss")
//         }, 2000);
//     }
//     )
// }

// async function data() {
//     await(asyncdata(2))
//     await(asyncdata(3))
//     await(asyncdata(4))
//     await(asyncdata(5))
//     await(asyncdata(6))
// }
// data()