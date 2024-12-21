// let obj = {
//     a: 1,
//     b:2
// }

// console.log(obj);

// let animal={
//     eats:true
// }
// let rabbit = {
//     jumps : true
// }
// rabbit.__proto__ = animal // sets rabbit.[[prototype]] = animal


class animal {
    constructor(name){
        this.name = name
        console.log("Object is created... ");//lines returned in constructor are excuted if a object is created
        
    }
    eats(){
        console.log("Eatinng");
        
    }
    jumps(){
        console.log("Jumping");
        
    }
}


class lion extends animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("Object is created...and is a lion ");//lines returned in constructor are excuted if a object is created
        
    }
    eats(){
        super.eats()    
        console.log("Eatinng yeaah roar");
        
    }
}

let obj = new animal("Bunny") 
console.log(obj);

let a  = new lion("shera")
console.log(a);

