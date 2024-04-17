function solution(n) {

    let answer = (n+"");
    let result = []
    for(let i = answer.length - 1; i >= 0; i--){
        result.push(Number(answer[i]))
    }
    
    
    return result;
}