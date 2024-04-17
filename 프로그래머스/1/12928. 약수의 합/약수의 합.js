function solution(n) {
    var answer = 0;
    
    // for(let i = 1; i <= n; i++){
    //     if(n % i === 0){
    //         answer += i
    //     }
    // }
    
    // return answer;
    
    return Array.from(Array(n), (_, index) => index + 1).reduce((acc,cur) => { return n % cur === 0 ? acc + cur : acc},0)
}