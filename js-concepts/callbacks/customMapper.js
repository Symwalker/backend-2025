// custom mapper example is down in this file
let arr = [1,2,3,4,5,6,7,8,9,10];
let returnArr = arr.map((val,i)=>{
    console.log(val);
    return val*val*val
}) // here it takes the callback

console.log(returnArr);


// now customMapper
function mapper(array, fn){
    let res = []
    for (let i = 0; i < array.length; i++) {
        let result = fn(array[i], i)
        res.push(result)
    }
    return res
}

let arr1 = [1,2,3,4,5]
function log(v, i){
    console.log(v*v*v, i);
    return v*v*v
}

let retAry = mapper(arr1 , log)
console.log(retAry, arr1);
