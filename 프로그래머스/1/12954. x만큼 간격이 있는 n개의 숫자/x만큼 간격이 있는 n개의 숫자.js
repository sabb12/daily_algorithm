function solution(x, n) {
    // var answer = [];
    // for(let i = 1; i <= n; i++){
    //     answer.push(i * x)
    // }
    // return answer;
    
    return Array(n).fill(x).map((num, i) => (i + 1) * x)
}