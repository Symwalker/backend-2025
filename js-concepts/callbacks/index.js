function fun(arr, fn){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    fn()
}

function gun(){
    console.log("gun function");
}

let arr = [1,2,3,4,5]

fun(arr, gun)