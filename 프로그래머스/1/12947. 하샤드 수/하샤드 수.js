function solution(x) {
    let newX = String(x).split("")
    let answer = 0;
    
    for(let i = 0; i < newX.length; i++){
            answer += Number(newX[i])
    }
    
    
    return x % answer === 0;
}