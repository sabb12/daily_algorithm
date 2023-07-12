
const n = 24;
// const n = 29;

function solution(n) {
    var answer = [];
    
    for(let i  = 0; i <= n; i++){
        if(n % i === 0){
            answer.push(i)
        }
    }
    
    return answer;
}

solution(n)