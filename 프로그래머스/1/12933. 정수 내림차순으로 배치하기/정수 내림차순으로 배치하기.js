function solution(n) {
    let answer = String(n).split("");
    
    for(let i = 0; i < answer.length; i++){
        if(answer[i] < answer[i + 1]){
            let temp = answer[i];
            answer[i] = answer[i + 1];
            answer[i + 1] = temp;
            i = -1
        };
    }
    
    return Number(answer.join(""));
}