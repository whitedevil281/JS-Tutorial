function calviews(v) {
    let vv
    if(v<1000 ){
        vv = v;
    }
    else{
    if (v>1000 && v<1000000) {
        vv = v/1000 +"k"
    } else {
        vv = v/1000000 +"M"
    }
    }
    return vv
}
function box(heading,cname,views,time,duration,image ) {
    document.querySelector("#heading").textContent =heading;
    document.querySelector("#cname").textContent =cname;
    document.querySelector("#vv").textContent =calviews(views);
    document.querySelector("#time").textContent =time +" ago";
    document.querySelector(".duration").textContent =duration;
    document.querySelector("#image").setAttribute("src",`${image}`)  
}


box("This is a heading","codewithharry","5000000","5 months","69:69","https://i.ytimg.com/vi/45XRsA8M3_I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjUV1cZ_tNc46lmeXlrU6Ag3HaBQ") 


