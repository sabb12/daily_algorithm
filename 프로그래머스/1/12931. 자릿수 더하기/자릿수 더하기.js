function solution(n){
    
//     let answer = String(n);
//     let result = 0;
    
//     for(let i = 0; i < answer.length; i++){
//         result +=  Number(answer[i])
//     }
//     return result;
    
    return [...String(n)].reduce((acc,cur)=> acc + Number(cur),0)
}