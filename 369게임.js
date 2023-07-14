
const order = 3;
// let order = 29423;

function solution(order) {
    // var answer = '';
    // answer += order
    // let newArray = answer.split('')
    // let num = 0;
    // for(let i = 0; i < newArray.length; i++){
    //     if(newArray[i] === "3" || newArray[i] === "6" || newArray[i] === "9"){
    //         num += 1
    //     }
    // }
    // return num;

        return [...order.toString().matchAll(/[3|6|9]/g)].length
}

solution(order)