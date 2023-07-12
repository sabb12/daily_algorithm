

let myString = "oxooxoxxox";
// let myString = "xabcxdefxghi";

function solution(myString) {
    var answer = [];
    // let newString = myString.split("x");
    // for(let i = 0; i < newString.length; i++){
    //     answer.push(newString[i].length)
    // }

    return myString.split('x').map(findLength => findLength.length);
}

solution(myString)