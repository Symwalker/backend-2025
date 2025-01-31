function outerFunc(){
    let name = "shayan";
    console.log(name);
    function innerFucn(){
        console.log(name, "inner Fucntion");
    }
    return innerFucn
}

let inner = outerFunc()
console.dir(inner)