
const myString = "axbxcxdx";
// const myString = "dxccxbbbxaaaa";

function solution(myString) {
    
    return myString.split("x").filter(n => n !== "").sort()
}

solution(myString)