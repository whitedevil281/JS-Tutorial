let names  = [
    "harry", "eshwar","palak","himanirajpurohit","eshu","alluu","pandu","dipu","mithu","nikkkkuuuuuuuuuuuu","meranamchagan"
]
let houses =[]
for (const name of names) {
    if(name.length<6){
        houses[name] = "Gryffindor";
    }
    else if(name.length<8){
        houses[name] = "Hufflepuff";
    }
    else if(name.length<12){
        houses[name] = "Ravenclaw";
    }
    else if(name.length>=12){
        houses[name] = "Slytherin";
    }
}
console.log(houses);
