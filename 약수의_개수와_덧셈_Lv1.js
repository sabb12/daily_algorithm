function solution(left, right) {
    let answer = 0;

    for(let i = left; i <= right; i++){
        !Number.isInteger(Math.sqrt(i)) ? answer += i : answer -= i  
    }      
    return answer;
}

// function solution(left, right) {
//     let answer = 0;

//     for(let i = left; i <= right; i++){
//         let array = [];
//         for(let k = 1; k <= i; k++){
//            // console.log(i, k,i % k === 0)
//             if(i % k == 0){
//                 array.push(k)
//             }
//         } 
//         if(array.length % 2 === 0){
//             answer += i
//         }else{
//             answer -= i
//         }
//     }      
//     return answer;
// }